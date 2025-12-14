"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Facebook, Instagram, Linkedin, Send, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"

export function Footerdemo() {
  const [isChatOpen, setIsChatOpen] = React.useState(false)

  return (
    <footer className={cn(
      "relative border-t transition-colors duration-300",
      "bg-background text-foreground",
      "border-border"
    )}>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">Stay Connected</h2>
            <p className="mb-6 text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 rounded-full"
              />
              <Button
                type="submit"
                size="icon"
                variant="default"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-black text-white transition-transform hover:scale-105 hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground transition-colors hover:text-primary">
                Home
              </a>
              <a href="#" className="block text-muted-foreground transition-colors hover:text-primary">
                About Us
              </a>
              <a href="#" className="block text-muted-foreground transition-colors hover:text-primary">
                Services
              </a>
              <a href="#" className="block text-muted-foreground transition-colors hover:text-primary">
                Products
              </a>
              <a href="#" className="block text-muted-foreground transition-colors hover:text-primary">
                Contact
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-foreground">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic text-muted-foreground">
              <p>123 Innovation Street</p>
              <p>Tech City, TC 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: hello@example.com</p>
            </address>
          </div>
          <div className="relative overflow-visible">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Follow Us</h3>
            <div className="mb-6 flex space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="
                        rounded-full bg-white text-black border border-gray-200
                        shadow-[inset_3px_3px_6px_rgba(0,0,0,0.12),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]
                        hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                        hover:-translate-y-[1px]
                        transition-all duration-300
                      "
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Facebook</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="
                        rounded-full bg-white text-black border border-gray-200
                        shadow-[inset_3px_3px_6px_rgba(0,0,0,0.12),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]
                        hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                        hover:-translate-y-[1px]
                        transition-all duration-300
                      "
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Twitter</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="
                        rounded-full bg-white text-black border border-gray-200
                        shadow-[inset_3px_3px_6px_rgba(0,0,0,0.12),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]
                        hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                        hover:-translate-y-[1px]
                        transition-all duration-300
                      "
                    >
                      <Instagram className="h-4 w-4" />
                      <span className="sr-only">Instagram</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="
                        rounded-full bg-white text-black border border-gray-200
                        shadow-[inset_3px_3px_6px_rgba(0,0,0,0.12),inset_-3px_-3px_6px_rgba(255,255,255,0.9)]
                        hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)]
                        hover:-translate-y-[1px]
                        transition-all duration-300
                      "
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
