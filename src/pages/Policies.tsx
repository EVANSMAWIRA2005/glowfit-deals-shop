import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Policies = () => {
  const [searchParams] = useSearchParams();
  const section = searchParams.get('section') || 'shipping';

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Policies & Information</h1>

        <Tabs defaultValue={section} className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            <TabsTrigger value="shipping">Shipping</TabsTrigger>
            <TabsTrigger value="returns">Returns</TabsTrigger>
            <TabsTrigger value="privacy">Privacy</TabsTrigger>
            <TabsTrigger value="terms">Terms</TabsTrigger>
            <TabsTrigger value="refund">Refund</TabsTrigger>
          </TabsList>

          <TabsContent value="shipping" className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Shipping Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We ship to all 50 U.S. states using trusted carriers.</p>
              <h3 className="font-semibold text-foreground">Shipping Times</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Standard Shipping: 3-5 business days</li>
                <li>Expedited Shipping: 2-3 business days</li>
                <li>Express Shipping: 1-2 business days</li>
              </ul>
              <h3 className="font-semibold text-foreground">Shipping Costs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>FREE shipping on orders over $20</li>
                <li>Standard shipping: $4.99 for orders under $20</li>
                <li>Expedited: $9.99</li>
                <li>Express: $14.99</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="returns" className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Return Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We want you to love your purchase! If you're not satisfied, we offer hassle-free returns.</p>
              <h3 className="font-semibold text-foreground">Return Window</h3>
              <p>You have 30 days from the date of delivery to return any item.</p>
              <h3 className="font-semibold text-foreground">Return Conditions</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Items must be unused and in original packaging</li>
                <li>Beauty products must be sealed</li>
                <li>All accessories and documentation must be included</li>
              </ul>
              <h3 className="font-semibold text-foreground">Return Process</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Contact our support team for a return authorization</li>
                <li>Pack your items securely</li>
                <li>Ship using the provided return label</li>
                <li>Receive your refund within 5-7 business days</li>
              </ol>
            </div>
          </TabsContent>

          <TabsContent value="privacy" className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>At GlowFit Deals, we take your privacy seriously.</p>
              <h3 className="font-semibold text-foreground">Information We Collect</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name, email, and shipping address</li>
                <li>Payment information (securely processed)</li>
                <li>Order history and preferences</li>
              </ul>
              <h3 className="font-semibold text-foreground">How We Use Your Information</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Send order updates and shipping notifications</li>
                <li>Improve our products and services</li>
                <li>Send promotional emails (you can opt-out anytime)</li>
              </ul>
              <h3 className="font-semibold text-foreground">Data Security</h3>
              <p>We use industry-standard encryption and security measures to protect your personal information.</p>
            </div>
          </TabsContent>

          <TabsContent value="terms" className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>By using GlowFit Deals, you agree to these terms.</p>
              <h3 className="font-semibold text-foreground">Account Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information</li>
                <li>Keep your account secure</li>
                <li>Notify us of any unauthorized use</li>
              </ul>
              <h3 className="font-semibold text-foreground">Product Information</h3>
              <p>We strive for accuracy but cannot guarantee that all product descriptions are error-free.</p>
              <h3 className="font-semibold text-foreground">Pricing</h3>
              <p>Prices are subject to change without notice. The price at checkout is final.</p>
              <h3 className="font-semibold text-foreground">Prohibited Uses</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reselling our products commercially</li>
                <li>Using our site for illegal purposes</li>
                <li>Attempting to harm our systems</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="refund" className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>We process refunds quickly and fairly.</p>
              <h3 className="font-semibold text-foreground">Refund Timeline</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Refund initiated within 24 hours of receiving your return</li>
                <li>Funds appear in your account within 5-7 business days</li>
                <li>Original shipping costs are non-refundable (except for defective items)</li>
              </ul>
              <h3 className="font-semibold text-foreground">Refund Method</h3>
              <p>Refunds are issued to the original payment method used at checkout.</p>
              <h3 className="font-semibold text-foreground">Exchanges</h3>
              <p>We currently don't offer direct exchanges. Please return your item and place a new order for the desired product.</p>
              <h3 className="font-semibold text-foreground">Damaged or Defective Items</h3>
              <p>If you receive a damaged or defective item, contact us immediately. We'll arrange a replacement or full refund, including shipping costs.</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default Policies;
