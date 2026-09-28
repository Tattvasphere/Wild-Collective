// Legal copy mirrored from the product portal. Paragraphs are strings; bullet lists are string arrays.

export type LegalBlock = string | string[];

export interface LegalDocument {
  title: string;
  intro: string;
  updated: string;
  leadBefore: string;
  leadAfter: string;
  sections: { heading: string; blocks: LegalBlock[] }[];
}

export const PRIVACY_POLICY: LegalDocument = {
  "title": "Privacy policy.",
  "intro": "How we handle information when you browse the Wild Collective website or contact us about a quotation.",
  "updated": "Last updated · 9 September 2026",
  "leadBefore": "This Privacy Policy applies to the Wild Collective website and related enquiries handled by",
  "leadAfter": "(“Wild Collective”, “we”, “us” or “our”). It explains what information may be received, why it is used, when it may be shared, and the choices available to you.",
  "sections": [
    {
      "heading": "1. Information you choose to provide",
      "blocks": [
        "When you prepare a quotation enquiry, contact us by WhatsApp, email or telephone, or continue an order discussion, you may provide:",
        [
          "your name, company or organization;",
          "telephone number, email address or other contact details;",
          "product, quantity, size, colour, delivery and customization requirements;",
          "logos, artwork, brand files, photographs or other materials you submit; and",
          "messages, feedback and other information connected with your enquiry or order."
        ]
      ]
    },
    {
      "heading": "2. How the website quotation form works",
      "blocks": [
        "The quotation form prepares a message in your browser and opens WhatsApp. It does not submit the completed form to a Wild Collective ecommerce database. Information becomes available to us only when you choose to send the message through WhatsApp or contact us through another channel.",
        "The website does not currently provide customer accounts, online checkout or online payment processing."
      ]
    },
    {
      "heading": "3. Technical information",
      "blocks": [
        "Our hosting and security providers may automatically process limited technical information needed to deliver and protect the website, such as an IP address, browser and device type, requested pages, timestamps, error details and security logs. We do not intentionally use marketing or behavioural advertising cookies on this website as of the date above."
      ]
    },
    {
      "heading": "4. How information is used",
      "blocks": [
        "We may use information for purposes connected with your request, including to:",
        [
          "respond to enquiries and prepare quotations;",
          "confirm product specifications, artwork, pricing, quantities and timelines;",
          "produce, personalize, pack, deliver and support confirmed orders;",
          "maintain business, tax, accounting and customer-service records;",
          "protect the website, our customers and our business from misuse or fraud; and",
          "comply with applicable law or a lawful request from an authority."
        ]
      ]
    },
    {
      "heading": "5. When information may be shared",
      "blocks": [
        "We do not sell personal information. Information may be shared only where reasonably necessary with service providers involved in communications, website hosting, printing, production, packaging, delivery, professional advice or business administration, or where disclosure is required by law.",
        "When you use WhatsApp, email, telephone or another external service, that provider processes information under its own terms and privacy policy. Those services may process information outside India."
      ]
    },
    {
      "heading": "6. Retention and security",
      "blocks": [
        "We retain enquiry and order information only for as long as reasonably needed for the purpose for which it was received, customer support, dispute handling, legitimate business records and applicable legal obligations. Retention periods may differ depending on whether an enquiry becomes a confirmed order.",
        "We use reasonable administrative, technical and organizational safeguards. No online or electronic transmission can be guaranteed to be completely secure, so please avoid sending sensitive personal information that is not needed for your quotation or order."
      ]
    },
    {
      "heading": "7. Your choices and requests",
      "blocks": [
        "Subject to applicable law, including the Digital Personal Data Protection Act, 2023, you may ask us about personal information associated with you, request correction or erasure where applicable, withdraw consent for future processing based on consent, or raise a grievance.",
        "We may need to verify your identity and may retain information where continued retention is required or permitted by law. Withdrawing consent does not affect processing already completed lawfully."
      ]
    },
    {
      "heading": "8. Children’s privacy",
      "blocks": [
        "This website is intended for general business and product enquiries and is not directed to children. A parent or lawful guardian who believes a child has provided personal information without appropriate authorization may contact us to request review and deletion where applicable."
      ]
    },
    {
      "heading": "9. Updates to this policy",
      "blocks": [
        "We may update this policy when our website, services or legal responsibilities change. The revised version will appear on this page with a new “Last updated” date. Material changes affecting an active customer relationship may also be communicated through an appropriate contact channel."
      ]
    },
    {
      "heading": "10. Contact and grievance requests",
      "blocks": [
        "For a privacy question, correction request or grievance, contact:"
      ]
    }
  ]
};

export const TERMS: LegalDocument = {
  "title": "Terms and conditions.",
  "intro": "Important terms for using this website and discussing custom merchandise quotations with Wild Collective.",
  "updated": "Last updated · 9 September 2026",
  "leadBefore": "These Terms govern your use of the Wild Collective website and quotation enquiries with",
  "leadAfter": "(“Wild Collective”, “we”, “us” or “our”). By using the website or sending an enquiry, you agree to these Terms. A confirmed quotation, invoice, purchase order or written agreement may contain additional terms and will control if it expressly differs from this website page.",
  "sections": [
    {
      "heading": "1. Website purpose",
      "blocks": [
        "This website presents apparel, merchandise, corporate gifts and customization options and provides a direct route to request a quotation. It is not an ecommerce store. The website does not accept online payment or automatically confirm an order."
      ]
    },
    {
      "heading": "2. Product information",
      "blocks": [
        "Descriptions, dimensions, materials, colour references, images, prices and minimum quantities are provided as catalogue guidance. Availability and final specifications depend on the selected product, customization method, quantity and supplier or production availability.",
        "Images are illustrative. Screen settings, lighting, manufacturing tolerances and material batches may create reasonable differences in colour, texture, scale or finish."
      ]
    },
    {
      "heading": "3. Prices and quotations",
      "blocks": [
        [
          "Prices shown on the website are in Indian rupees and may change when specifications, quantities or costs change.",
          "A WhatsApp message, email, telephone discussion or submitted brief is an enquiry, not an accepted order.",
          "The final quotation will identify the applicable product, quantity, customization, taxes, packaging, delivery charges, payment terms and validity period.",
          "An order is confirmed only after the required written approval and payment arrangements stated in the quotation or invoice are completed."
        ]
      ]
    },
    {
      "heading": "4. Customer specifications and artwork",
      "blocks": [
        "You are responsible for providing accurate quantities, sizes, spellings, colours, delivery details and production-ready artwork where requested. You confirm that you own or have permission to use every logo, design, photograph, trademark and other material you supply.",
        "You grant us the limited permission needed to review, adapt for production, proof and manufacture the requested products. We may decline content that appears unlawful, misleading, infringing, abusive or technically unsuitable."
      ]
    },
    {
      "heading": "5. Proofs and approvals",
      "blocks": [
        "Where a digital or physical proof is provided, production may begin after your approval. You are responsible for checking spelling, placement, scale, colours, quantities and other visible details. Changes requested after approval may affect price and delivery timing."
      ]
    },
    {
      "heading": "6. Production and delivery",
      "blocks": [
        "Production and delivery dates are estimates until confirmed in writing. We will take reasonable steps to meet confirmed schedules, but timing may be affected by artwork delays, approval changes, product availability, courier conditions or events beyond reasonable control.",
        "Please inspect delivered goods promptly and contact us with the order details if quantities are missing, goods arrive damaged or the supplied customization materially differs from the approved specification."
      ]
    },
    {
      "heading": "7. Changes, cancellations and custom goods",
      "blocks": [
        "Customized goods are prepared for a specific customer and may not be suitable for resale. Cancellation, replacement, return and refund conditions therefore depend on the production stage and the terms of the accepted quotation. Contact us promptly if a change or problem arises; the confirmed order documents will determine the available resolution."
      ]
    },
    {
      "heading": "8. Acceptable website use",
      "blocks": [
        "You must not misuse the website, attempt unauthorized access, interfere with its operation, introduce malicious code, scrape it in a way that harms service availability, impersonate another person, or use the quotation tools for unlawful, fraudulent or abusive activity."
      ]
    },
    {
      "heading": "9. Intellectual property",
      "blocks": [
        "The Wild Collective name, website design, original text, graphics and other site content are owned by or licensed to us and may not be copied or commercially reused without permission. Product names and third-party marks remain the property of their respective owners. Customer-supplied artwork remains subject to the rights of its owner."
      ]
    },
    {
      "heading": "10. Third-party services and links",
      "blocks": [
        "The website may open WhatsApp, email, telephone, delivery or other third-party services. We do not control their availability, security, content or terms. Your use of those services is also governed by the relevant provider’s policies."
      ]
    },
    {
      "heading": "11. Disclaimer and limitation",
      "blocks": [
        "The website is provided on an “as available” basis. To the extent permitted by applicable law, we do not guarantee uninterrupted access or that all catalogue information will remain current at every moment. Nothing in these Terms excludes a right or remedy that cannot lawfully be excluded.",
        "To the extent permitted by law, we are not responsible for indirect or consequential loss arising only from website unavailability or reliance on unconfirmed catalogue information. Liability relating to a confirmed order will be considered under the accepted order documents and applicable law."
      ]
    },
    {
      "heading": "12. Governing law and contact",
      "blocks": [
        "Unless a confirmed written agreement states otherwise, these Terms are governed by the laws of India, and disputes are subject to the courts of competent jurisdiction in Mysuru, Karnataka."
      ]
    }
  ]
};
