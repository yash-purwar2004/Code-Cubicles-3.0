import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GiChaingun } from "react-icons/gi";
import { TbLivePhoto } from "react-icons/tb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  Zap,
  Database,
  Lock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { Navbar } from "@/components/component/navbar";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/bg_video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        {/* Overlay to darken the video for better contrast */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* Content on top of the video */}
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2 transition-all duration-500 ease-in-out transform translate-y-0 opacity-100">
                <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Supercharge Your Customer Support with Ailo
                </h1>
                <p className="max-w-[600px] text-gray-200 md:text-xl dark:text-gray-200 mt-4">
                  Our AI-powered chatbot learns from your website content to provide instant, accurate support to your customers 24/7.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row transition-all duration-500 ease-in-out transform translate-y-0 opacity-100 delay-150">
                <Button size="lg">Get Started</Button>
                <Button size="lg" variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="flex items-center justify-center transition-all duration-500 ease-in-out transform scale-100 opacity-100">
              <div className="relative w-full max-w-lg">
                {/* <div className="relative">
                  <Image
                    src="/hero.png"
                    width={400}
                    height={400}
                    alt="ChatSupport AI Interface"
                    className="rounded-lg shadow-2xl"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Zap className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Instant Responses</CardTitle>
                </CardHeader>
                <CardContent>
                  Provide immediate answers to customer queries, reducing wait
                  times and improving satisfaction.
                </CardContent>
              </Card>
              <Card className="shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Database className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Content-Trained AI</CardTitle>
                </CardHeader>
                <CardContent>
                  Our AI learns from your website content, ensuring accurate and
                  context-aware responses.
                </CardContent>
              </Card>
              <Card className="shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <Lock className="h-8 w-8 mb-2 text-primary" />
                  <CardTitle>Secure & Private</CardTitle>
                </CardHeader>
                <CardContent>
                  Your data is encrypted and protected, ensuring the privacy and
                  security of your customer interactions.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full h-full py-12 md:py-24 lg:py-32 bg-[url('/ai2_bg.jpg')] bg-[length:100%_100%] bg-no-repeat bg-cover">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white text-center mb-12">
              How It Works
            </h2>
            <ol className="grid grid-cols-1 md:grid-cols-3 gap-8 list-none">
              <li className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  <GiChaingun />
                </div>
                <h3 className="text-xl text-white border-solid border-gray-500 font-bold mb-2">Connect Your Website</h3>
                <p className="text-white dark:text-gray-400">
                  Simply provide your website URL, and our AI will start
                  learning from your content.
                </p>
              </li>
              <li className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  <MdOutlineDashboardCustomize />
                </div>
                <h3 className="text-xl text-white font-bold mb-2">Customize & Train</h3>
                <p className="text-white dark:text-gray-400">
                  Fine-tune the AI's responses and add custom knowledge to fit
                  your specific needs.
                </p>
              </li>
              <li className="flex flex-col items-center text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mb-4">
                  <TbLivePhoto />
                </div>
                <h3 className="text-xl text-white font-bold mb-2">Go Live</h3>
                <p className="text-white dark:text-gray-400">
                  Embed the chatbot on your website and start providing 24/7
                  AI-powered customer support.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
  <div className="container px-1 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100">
      What Our Customers Say
    </h2>
    <div className="grid grid-cols-1 l:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
      {[
        {
          name: "Mohd. Shaheer",
          role: "CEO, Nova AI",
          content: "Nova AI has revolutionized our customer service. Our response times have decreased by 80%, and customer satisfaction is at an all-time high.",
          image: "/shaheer.jpeg", // Add image path
        },
        {
          name: "Rahul Joon",
          role: "CFO, ScaleUp",
          content: "Our team can now focus on complex issues while the AI handles routine queries. It's been a game-changer for our efficiency and scalability.",
          image: "/rahul.jpeg", // Add image path
        },
        {
          name: "Yash Purwar",
          role: "CTO, GrowthHub",
          content: "The AI's ability to learn from our content is impressive. It's like having a support team that knows everything about our product, available 24/7.",
          image: "/yash.jpeg", // Add image path
        },
        {
          name: "Farah Masoodi",
          role: "Customer Success Manager, ScaleUp",
          content: "Our team can now focus on complex issues while the AI handles routine queries. It's been a game-changer for our efficiency and scalability.",
          image: "/farah.jpeg", // Add image path
        },
      ].map((testimonial, index) => (
        <Card
          key={index}
          className="relative overflow-hidden bg-gradient-to-r from-gray-100 to-white text-gray-800 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-gradient-to-br from-gray-200 to-transparent rounded-lg pointer-events-none"></div>
          
          <CardHeader className="flex flex-col items-center z-10 relative">
            {/* Display customer image */}
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-gray-300 shadow-md"
            />
            <CardTitle className="text-xl font-semibold text-gray-900">{testimonial.name}</CardTitle>
            <p className="text-sm text-center text-gray-600">{testimonial.role}</p>
          </CardHeader>
          <CardContent className="text-center z-10 relative">
            <p className="text-base leading-relaxed text-gray-700">"{testimonial.content}"</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

        {/* <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Simple, Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Starter", price: "$49", features: ["Up to 500 conversations/mo", "Basic customization", "Email support"] },
                { name: "Pro", price: "$99", features: ["Up to 2000 conversations/mo", "Advanced customization", "Priority support"] },
                { name: "Enterprise", price: "Custom", features: ["Unlimited conversations", "Full customization", "Dedicated account manager"] }
              ].map((plan) => (
                <Card key={plan.name} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <p className="text-3xl font-bold">{plan.price}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">per month</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle2 className="h-5 w-5 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0 mt-auto">
                    <Button className="w-full">{plan.price === "Custom" ? "Contact Sales" : "Get Started"}</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Frequently Asked Questions
            </h2>
            <Accordion
              type="single"
              collapsible
              className="w-full max-w-3xl mx-auto"
            >
              {[
                {
                  question: "How does Ailo learn from my website?",
                  answer:
                    "Ailo uses advanced natural language processing to analyze and understand the content on your website. It extracts key information, FAQs, and product details to build a knowledge base that informs its responses to customer queries.",
                },
                {
                  question: "Can I customize the AI's responses?",
                  answer:
                    "Yes, you have full control over the AI's responses. You can add custom knowledge, set up specific reply templates, and even create decision trees to guide the AI's conversation flow based on your preferences and brand voice.",
                },
                {
                  question: "Is my data secure with Ailo?",
                  answer:
                    "Absolutely. We take data security very seriously. All data is encrypted in transit and at rest. We comply with GDPR and other data protection regulations, and we never use your data for any purpose other than improving your specific chatbot's performance.",
                },
                {
                  question: "How quickly can I get started with Ailo?",
                  answer:
                    "You can have Ailo up and running on your website in as little as 15 minutes. Simply sign up, provide your website URL, and our AI will start learning. You can then embed the chatbot on your site with a simple code snippet.",
                },
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Transform Your Customer Support?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of businesses using ChatSupport AI to provide
                  instant, accurate support to their customers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your 14-day free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 ChatSupport AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
