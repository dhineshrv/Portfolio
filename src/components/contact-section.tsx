import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_n6cnidc",       // Service ID
        "template_vw50cx7",      // Template ID
        formRef.current,
        "ap4kAG6C1sMFNmoc7"      // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <section id="contact" className="section-container bg-muted/30">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Location</h4>
                    <p className="text-muted-foreground">Annur, Coimbatore</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email</h4>
                    <a href="mailto:dhineshrv1@gmail.com" className="text-accent hover:underline">
                      dhineshrv01@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">Phone</h4>
                    <a href="tel:+919791796867" className="text-accent hover:underline">
                      +91 9791796867
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full">
                    <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/dhinesh-r-v"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      linkedin.com/in/dhinesh-r-v
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-2 rounded-md border bg-background"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="w-full px-4 py-2 rounded-md border bg-background"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 rounded-md border bg-background resize-none"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <Button type="submit" className="w-full sm:w-auto">
                <Send className="mr-2 h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
