import { useContext } from "react";
import { ThemeContext } from "../App";
const FAQ = () => {
  const theme = useContext(ThemeContext);

  return (
    <div data-theme={theme}>
      <div className="general-question">
        <p className="text-2xl text-center font-bold py-4 text-blue-600">
          FAQ's
        </p>
        <div className="md:w-1/2 w-full mx-auto p-4">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What are QR cards?
            </div>
            <div className="collapse-content">
              <p>
                QR cards are digital invitations that include a QR code. Guests
                can scan the QR code with their smartphones to access the event
                details, RSVP, and other information online.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do QR cards work?
            </div>
            <div className="collapse-content">
              <p>
                After we design your card, we generate a unique QR code that
                links to your event page. Guests scan this code to view all the
                details.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I customize my QR card?
            </div>
            <div className="collapse-content">
              <p>
                You can use our online design tool to customize your card with
                your chosen text, colors, and images
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I upload my own design?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can upload your own design, and we will integrate the
                QR code into it.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What information can I include in the QR code?
            </div>
            <div className="collapse-content">
              <p>
                You can include details like the event date, time, location,
                RSVP link, and any special instructions.{" "}
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I add my wedding or event website link to the QR card?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can include your personal wedding or event website link
                in the QR code.{" "}
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What are your pricing options?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Our pricing depends on the complexity of the design and the
                number of cards you order. Please refer to our pricing page for
                detailed information.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What payment methods do you accept?{" "}
            </div>
            <div className="collapse-content">
              <p>We accept major online payment methods.</p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How long does it take to receive my QR card?{" "}
            </div>
            <div className="collapse-content">
              <p>
                ? Digital QR cards are delivered instantly via email. If you opt
                for physical cards, delivery times vary based on your location.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I get a digital version of my card?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Yes, all our QR cards come with a digital version that you can
                share via email or social media.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do guests scan the QR code?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Guests can use any smartphone camera or a QR code scanning app
                to scan the code and access the event details
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What if my guests have trouble scanning the QR code?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Our support team is available to assist with any technical
                issues. We also provide a direct link to the event page as an
                alternative.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I make changes to my card after ordering?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can make changes to your digital card at any time. For
                physical cards, changes can be made before printing starts.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What is your cancellation policy?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Digital orders can be canceled within 24 hours for a full
                refund. For physical cards, cancellations are accepted before
                printing starts.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I send invitations directly through your platform?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can send digital invitations directly to your guests'
                email addresses through our platform.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              How do I manage my guest list?{" "}
            </div>
            <div className="collapse-content">
              <p>
                You can easily manage your guest list through our online
                dashboard, where you can easily add and remove.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Can I use QR cards for events other than weddings?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! Our QR cards are perfect for birthdays,
                anniversaries, corporate events, and more.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do you offer themed designs for different occasions?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Yes, we offer a variety of themed designs for different
                occasions, including birthdays, baby showers, and corporate
                events.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Do you offer physical printing services?{" "}
            </div>
            <div className="collapse-content">
              <p>
                ? Yes, we offer high-quality printing services for your QR cards
                and deliver them to your specified address.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              What paper options do you offer for physical cards?{" "}
            </div>
            <div className="collapse-content">
              <p>
                We offer a variety of paper options, including matte, glossy,
                and premium textured finishes.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Are your cards eco-friendly?{" "}
            </div>
            <div className="collapse-content">
              <p>
                Yes, we also offer eco-friendly printing options and digital
                cards to help reduce environmental impact
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
