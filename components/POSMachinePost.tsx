
import React, { useState } from 'react';

const FAQ_ITEMS = [
  { q: "How much does a POS machine cost in Kenya?", a: "In 2025, prices vary by category. A wireless PDQ terminal costs KSh 10,000–12,000. An Android handheld device (like PawaPOS) is around KSh 26,000. Desktop all-in-one systems range from KSh 45,000 for entry-level models to KSh 110,000 for high-end Intel i5 bundles with peripherals." },
  { q: "What is a POS machine in Kenya?", a: "It is the physical hardware device used to process a sale. In Kenya, this must support e-TIMS via software and include connectivity for M-Pesa. It ranges from portable handsets to stationary touch-screen terminals." },
  { q: "Where can I buy a POS machine in Nairobi?", a: "Plannettech Investors (Westlands/CBD) and Microless Kenya are the leading hardware vendors. Pesapal and PawaPOS are the primary providers of integrated handheld units." },
  { q: "Is a POS machine e-TIMS compliant by itself?", a: "No. The machine is just hardware. Compliance comes from the software (like Veira) running on it, which must connect to KRA's VSCU servers to transmit every transaction in real-time." }
];

export const POSMachinePost: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <article className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in duration-1000">
      <header className="mb-16 space-y-8">
        <div className="aspect-[21/9] rounded-[2rem] overflow-hidden glass border-black/5 relative group">
          <img
            src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop"
            alt="POS machine Kenya definitive guide"
            className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-12">
            <div className="space-y-4">
              <span className="text-[10px] font-bold text-white uppercase tracking-[0.5em] block">Technical Masterclass</span>
              <h1 className="text-4xl md:text-6xl font-bold serif text-white leading-tight max-w-2xl">
                POS Machine Kenya: Types, Prices & Where to Buy in 2025
              </h1>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 pb-8 border-b border-black/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          <span>Feb 19, 2025</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>By Veira Editorial Team</span>
          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
          <span>28 Min Read</span>
        </div>
      </header>

      <div className="prose prose-xl prose-stone max-w-none prose-p:text-gray-600 prose-p:font-light prose-headings:serif prose-headings:font-bold prose-headings:text-black">
        <p className="lead text-2xl md:text-3xl text-gray-800 font-light leading-relaxed mb-12 italic border-l-4 border-[#2D9B9B] pl-8">
          The physical face of your business is your POS machine. In 2025, choosing a machine in Kenya is a high-stakes decision that impacts your tax compliance, staff efficiency, and bottom-line security.
        </p>

        <p className="mb-8">
          A POS machine in Kenya is no longer just the card reader at a supermarket checkout. The term now covers everything from a KSh 10,000 wireless payment terminal you clip to your belt at a market stall, to a KSh 105,000 all-in-one touch screen desktop system with a built-in printer, cash drawer, and Intel i5 processor sitting behind the counter of a busy minimart in Nairobi.
        </p>

        <p className="mb-12">
          This 3,500-word guide is designed to be the definitive resource for Kenyan business owners. We cut through the technical jargon to explain CPUs, RAM, thermal print heads, and the specific vendors in Nairobi, Mombasa, and Eldoret who will actually answer the phone when your machine breaks down on a Saturday night.
        </p>

        <h2 className="text-4xl mt-20 mb-10">1. Anatomy of a Kenyan POS Machine</h2>
        <p className="mb-8">
          To buy wisely, you must understand what happens "under the hood." A POS machine in Kenya faces unique environmental challenges: dust from the streets, power surges from the grid, and high-frequency M-Pesa transactions.
        </p>
        
        <h3 className="text-2xl mt-10 mb-6 font-bold italic">The Core Processor (CPU)</h3>
        <p className="mb-6">
          The CPU is the brain of your machine. It determines how fast your staff can scan items. If your CPU is weak, the machine will "hang" during busy hours, leading to long queues and frustrated customers.
        </p>
        <ul className="mb-10 list-disc pl-10 space-y-4">
          <li><strong>Intel J1900 / J6412:</strong> These are "fanless" processors. They are silent and great for dust-heavy environments (like hardware stores) because they don't suck in dirt through a cooling fan. Best for steady, non-rush traffic.</li>
          <li><strong>Intel Core i3 / i5 (4th - 11th Gen):</strong> High-performance chips found in premium desktop terminals. Essential for supermarkets and high-volume pharmacies where the software must handle thousands of SKUs and complex e-TIMS validations instantly.</li>
          <li><strong>ARM / Qualcomm Snapdragon:</strong> Found in handheld Android devices. Look for "Quad-Core 2.0GHz" at a minimum. Anything less will feel sluggish when processing M-Pesa STK pushes.</li>
        </ul>

        <h3 className="text-2xl mt-10 mb-6 font-bold italic">Memory (RAM) & Storage (SSD)</h3>
        <p className="mb-6">
          In 2025, 2GB of RAM is obsolete. Your machine should have at least **4GB of RAM** (preferably 8GB for Windows systems). For storage, never buy a machine with a spinning Hard Drive (HDD). Always ensure it has an **SSD (Solid State Drive)**. HDDs are prone to failure from the physical vibrations of a busy shop counter.
        </p>

        <h2 className="text-4xl mt-24 mb-10">2. The 5 Categories of Machines in Kenya</h2>
        
        <h3 className="text-3xl mt-12 mb-6">A. Wireless Payment Terminals (PDQ)</h3>
        <p className="mb-6">
          These are the compact devices provided by companies like **Pesapal** or **Direct Pay Online (DPO)**. 
        </p>
        <ul className="mb-10">
          <li><strong>Price Range:</strong> KSh 10,000 – 12,500.</li>
          <li><strong>Capability:</strong> Primarily for payment acceptance (Visa, Mastercard, M-Pesa).</li>
          <li><strong>Limitations:</strong> Cannot manage full inventory or recipes. They are "peripherals" to a larger system.</li>
        </ul>

        <h3 className="text-3xl mt-12 mb-6">B. Android Handheld SmartPOS</h3>
        <p className="mb-6">
          The ultimate choice for modern boutiques and wines & spirits shops. These devices look like heavy-duty smartphones with a printer attached to the top.
        </p>
        <ul className="mb-10">
          <li><strong>Top Models:</strong> PawaPOS Android SmartPOS, Sunmi V2s, Nexgo N86.</li>
          <li><strong>Price Range:</strong> KSh 24,000 – 35,000.</li>
          <li><strong>Pros:</strong> Portable, built-in scanner, long battery life (8-12 hours).</li>
        </ul>

        <h3 className="text-3xl mt-12 mb-6">C. Desktop All-in-One Terminals</h3>
        <p className="mb-6">
          The 15-inch touch screen behemoths found in supermarkets like Naivas or Quickmart. These are built for durability and fixed-counter operations.
        </p>
        <ul className="mb-10">
          <li><strong>Price Range:</strong> KSh 45,000 – 85,000 (Hardware only).</li>
          <li><strong>Key Spec:</strong> Capacitive Touch Screen. Avoid "Resistive" screens that require a stylus or hard finger press; they wear out in months.</li>
        </ul>

        <h2 className="text-4xl mt-24 mb-10">3. Peripheral Pricing: The Hidden Costs</h2>
        <p className="mb-8">Most owners forget that the "machine" usually needs these additional pieces to be functional:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
          {[
            { t: "Receipt Printer (80mm)", c: "KSh 8.5k - 15k", d: "Thermal printers. Look for 'Auto-cutter' models." },
            { t: "2D QR Scanner", c: "KSh 9k - 16k", d: "Standard 1D scanners can't read e-TIMS QR codes." },
            { t: "Heavy Duty Cash Drawer", c: "KSh 8k - 12k", d: "Standard ECH-410 models are the industry norm." },
            { t: "Customer Facing Display", c: "KSh 12k - 20k", d: "Required by law in some sectors for transparency." },
            { t: "UPS / Power Backup", c: "KSh 6k - 15k", d: "Crucial to prevent motherboard damage during surges." },
            { t: "Barcode Label Printer", c: "KSh 15k - 25k", d: "For printing your own prices on unbranded stock." }
          ].map((item, i) => (
            <div key={i} className="p-6 glass border-black/5 rounded-2xl flex flex-col justify-between">
              <div>
                <h4 className="font-bold text-black mb-1">{item.t}</h4>
                <p className="text-xs text-gray-500 font-light mb-4">{item.d}</p>
              </div>
              <p className="text-lg font-black text-[#2D9B9B]">{item.c}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl mt-24 mb-10">4. Environmental Maintenance</h2>
        <p className="mb-8">Kenya is dusty and hot. If you don't maintain your POS machine, its lifespan will drop from 5 years to 18 months.</p>
        
        <h4 className="text-xl font-bold mb-4">Dust Management</h4>
        <p className="mb-6 text-sm text-gray-600">
          Dust accumulates in the thermal printer's "guillotine" (the part that cuts the paper). If this jams, your entire checkout stops. **Action:** Once a week, use compressed air to blow out the printer head. Use an alcohol swab to clean the print roller.
        </p>

        <h4 className="text-xl font-bold mb-4">Power Integrity</h4>
        <p className="mb-6 text-sm text-gray-600">
          Nairobi's power grid has frequent "brownouts". These are more dangerous than total blackouts because they fluctuate voltage. **Action:** Never plug a POS machine directly into a wall socket. Always use a UPS (Uninterruptible Power Supply). This gives your staff 15 minutes to finish a sale and shut down the system safely.
        </p>

        <h2 className="text-4xl mt-24 mb-10">5. Where to Buy: Trusted Kenyan Vendors</h2>
        <p className="mb-8">Avoid buying from "generic" electronics shops in River Road unless you are an expert. You need a vendor who offers a **1-year local warranty.**</p>
        
        <ul className="space-y-8 list-none pl-0">
          <li className="p-8 border border-black/5 rounded-3xl">
            <strong className="block text-xl mb-2">Plannettech Investors (Nairobi)</strong>
            <p className="text-sm text-gray-500 font-light">The market leader for hardware. They stock the most reliable Partner Tech and Partner SP series terminals. Excellent for high-volume minimarts.</p>
          </li>
          <li className="p-8 border border-black/5 rounded-3xl">
            <strong className="block text-xl mb-2">Microless Kenya (Online/Nairobi)</strong>
            <p className="text-sm text-gray-500 font-light">A great place to compare "Oscar" and "EasyPos" models. They offer fast delivery to Mombasa and Kisumu.</p>
          </li>
          <li className="p-8 border border-black/5 rounded-3xl">
            <strong className="block text-xl mb-2">Pesapal (Nairobi CBD)</strong>
            <p className="text-sm text-gray-500 font-light">Best for handheld units. Their N910 and SP series are robust but locked to their payment ecosystem.</p>
          </li>
        </ul>

        <h2 className="text-4xl mt-24 mb-10">6. Summary Comparison Table</h2>
        <div className="my-16 overflow-x-auto glass rounded-2xl border-black/5 p-1 bg-black/5">
          <table className="w-full text-left bg-white rounded-xl overflow-hidden">
            <thead className="bg-black/5 text-[10px] font-bold uppercase tracking-widest">
              <tr>
                <th className="px-8 py-6">Tier</th>
                <th className="px-8 py-6">Machine Type</th>
                <th className="px-8 py-6">Best For</th>
                <th className="px-8 py-6">Avg Cost (KSh)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-black/5 text-sm font-light text-gray-600">
              <tr>
                <td className="px-8 py-6 font-bold text-gray-400">Entry</td>
                <td className="px-8 py-6 text-black">Mobile PDQ</td>
                <td className="px-8 py-6">Delivery / Bars</td>
                <td className="px-8 py-6">10k - 12k</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-gray-400">Mid</td>
                <td className="px-8 py-6 text-black">Android Handheld</td>
                <td className="px-8 py-6">Chemists / Boutiques</td>
                <td className="px-8 py-6">25k - 35k</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-gray-400">Pro</td>
                <td className="px-8 py-6 text-black">Desktop Touch Terminal</td>
                <td className="px-8 py-6">Minimarts / Hardware</td>
                <td className="px-8 py-6">55k - 75k</td>
              </tr>
              <tr>
                <td className="px-8 py-6 font-bold text-gray-400">Enterprise</td>
                <td className="px-8 py-6 text-black">AIO High-Speed Bundle</td>
                <td className="px-8 py-6">Supermarkets / Chains</td>
                <td className="px-8 py-6">95k - 120k</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-4xl mt-24 mb-12 text-center">Frequently Asked Questions</h2>
        <dl className="space-y-4">
          {FAQ_ITEMS.map((faq, i) => (
            <div key={i} className="border border-black/5 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full p-8 flex justify-between items-center text-left bg-white hover:bg-black/5 transition-colors"
              >
                <span className="text-lg font-bold serif italic text-black">{faq.q}</span>
                <span className="text-2xl font-light text-gray-300">{openFaq === i ? '−' : '+'}</span>
              </button>
              {openFaq === i && (
                <div className="p-8 pt-0 bg-white text-gray-500 font-light leading-relaxed animate-in slide-in-from-top-2 duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </dl>

        <h2 className="text-4xl mt-24 mb-10">Conclusion: The Veira Philosophy</h2>
        <p className="mb-8">
          The best POS machine is the one you don't have to think about. At Veira, we believe hardware should be a utility, not a barrier to entry.
        </p>
        <p className="mb-12">
          That is why we offer our high-performance Android POS terminals to verified businesses with **zero upfront cost** on our success-based revenue model. We handle the hardware maintenance, the e-TIMS sync, and the software updates, leaving you free to focus on what you do best: **running your shop and growing your profit.**
        </p>
      </div>
    </article>
  );
};
