"use client";

import Pricing from "../components/Pricing";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const PricingPage = () => {
  return (
    <div className="antialiased w-full h-ful font-inter p-10">

      <Pricing />

      <div className="flex flex-col justify-center items-center h-[70vh]" id="FAQ">
        <div className="relative flex flex-col items-center rounded-[20px] mx-auto bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:!shadow-none p-3 max-w-[90vh]">
          <p className="text-lg font-bold pb-4">Frequently Asked Questions (FAQ) about our Subscription Features:</p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Listings per Month: How many listings can I upload with the subscription?</AccordionTrigger>
              <AccordionContent>
              Our subscription plan allows you to upload an unlimited number of listings per month. Showcase your entire property inventory and attract more potential buyers and renters.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Inquiries per Month: How many inquiries can I receive with the subscription?</AccordionTrigger>
              <AccordionContent>
              With our subscription, you have the capacity to receive an increased number of inquiries per month. Connect with interested individuals, respond promptly, and maximize your chances of closing successful deals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Lead Credits per Month: What are lead credits and how do they work?</AccordionTrigger>
              <AccordionContent>
              Lead credits are a valuable resource that allows you to access premium leads. Each month, you'll receive a set number of credits that can be used to unlock detailed information about potential clients and properties, giving you a competitive advantage in the market.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Access to Leads: What does "Access to Leads" mean?</AccordionTrigger>
              <AccordionContent>
              Our subscription plan provides you with exclusive access to a wide network of leads. Connect directly with potential buyers or renters, establish meaningful relationships, and increase your chances of converting leads into successful transactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>SMS notification: How does the SMS notification feature work?</AccordionTrigger>
              <AccordionContent>
              Stay updated and never miss an opportunity with our SMS notification system. You'll receive instant alerts and updates via text message, keeping you informed about new listings, inquiries, and lead activity.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Auto Responder: What is the Auto Responder feature and how does it benefit me?</AccordionTrigger>
              <AccordionContent>
              The Auto Responder feature saves you time and ensures prompt communication. Set up automated responses to incoming messages, providing professional and timely replies to inquiries, making your customer interactions seamless and efficient.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>    
    </div>
  );
};

export default PricingPage;