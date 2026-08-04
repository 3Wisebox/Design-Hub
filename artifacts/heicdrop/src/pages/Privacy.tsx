import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { Shield } from 'lucide-react';

export function Privacy() {
  useDocumentTitle('Privacy Policy — HEICraft');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-16 max-w-3xl">
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-[#6c5ce7]/10 text-[#6c5ce7] rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>

        <div className="prose prose-slate max-w-none bg-card border rounded-3xl p-8 md:p-12 shadow-sm">
          <h3 className="text-xl font-bold mt-0 text-[#6c5ce7]">The Short Version</h3>
          <p>
            <strong>We do not see, upload, or store your photos.</strong> HEICraft is a 100% client-side application. All file conversions happen directly within your web browser. 
          </p>

          <h3 className="text-xl font-bold mt-8">1. File Processing & Conversion</h3>
          <p>
            When you use HEICraft to convert HEIC/HEIF files to PDF, the files you select are loaded into your browser's local memory. The conversion scripts run locally on your device. We do not transmit your files to any external server, and we do not keep copies of your data.
          </p>

          <h3 className="text-xl font-bold mt-8">2. Data Collection</h3>
          <p>
            We do not require you to create an account, provide an email address, or submit any personally identifiable information to use HEICraft. We collect zero personal data.
          </p>

          <h3 className="text-xl font-bold mt-8">3. Analytics & Cookies</h3>
          <p>
            We may use privacy-friendly, cookieless analytics tools strictly to understand basic usage statistics (like page views or aggregated conversion counts) to improve our service. These tools do not track individual users or store personal information.
          </p>

          <h3 className="text-xl font-bold mt-8">4. Third-Party Libraries</h3>
          <p>
            HEICraft relies on open-source JavaScript libraries (like <code>heic2any</code> and <code>pdf-lib</code>) to perform conversions. These libraries run entirely in your browser and do not phone home or transmit data to third parties.
          </p>

          <h3 className="text-xl font-bold mt-8">5. Changes to this Policy</h3>
          <p>
            We may update this privacy policy from time to time. Any changes will be reflected on this page. Given our strict no-upload architecture, future changes will only reinforce our commitment to your privacy.
          </p>

          <div className="mt-12 p-6 bg-muted rounded-xl flex flex-col items-center text-center">
            <h4 className="font-bold m-0 mb-2">Still have questions?</h4>
            <p className="text-sm text-muted-foreground m-0">
              Since we don't collect your data, there's not much else to say! Enjoy converting your photos securely.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
