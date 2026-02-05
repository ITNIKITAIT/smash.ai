'use client';

import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Checkbox } from '../ui/checkbox';
import { Mail, ArrowRight } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-white/5">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 bg-card/30 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
          
          {/* Email Alerts Section */}
          <div className="p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-white/10 relative group">
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8">Email Alerts</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <Input 
                    placeholder="Email Address" 
                    className="bg-background/50 border-white/10 focus-visible:ring-primary h-12" 
                  />
                </div>
                
                <div className="flex flex-wrap gap-6">
                  {['News', 'Token Sale Updates', 'Events'].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <Checkbox id={item} />
                      <label
                        htmlFor={item}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>

                <Button className="w-full md:w-auto min-w-[140px]" variant="secondary">
                  SUBMIT
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Investor Contact Section */}
          <div className="p-8 md:p-12 lg:p-16 relative bg-secondary/5 group">
             <div className="absolute inset-0 bg-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative z-10 h-full flex flex-col justify-center"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Investor Contact</h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Questions for the Investor Relations department can be emailed to hello@sms.ai or submitted by clicking on the button below.
              </p>
              
              <div>
                <Button size="xl" variant="glow" asChild>
                  <a href="mailto:hello@sms.ai">
                    CONTACT US <Mail className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
