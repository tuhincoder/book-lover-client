// import Container from "../../component/common/Container";
import faqImg from "../../assets/images/bookDetails/book1.jpg";

const Faq = () => {
  return (
    // <Container>
    <div className="pt-16">
      {/* Manual Header - consistent with other sections */}
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl md:text-5xl font-black text-[#052c65] uppercase tracking-tighter">
          Frequently Asked <span className="text-red-500">Questions</span>
        </h2>
        <div className="w-24 h-1.5 bg-red-500 mx-auto rounded-full"></div>
        <p className="text-slate-500 hidden md:block font-medium pt-2">
          Everything you need to know about our library services.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center">
        {/* Left Side: Professional Image with Border Effect */}
        <div className="flex-1 w-full relative group">
          <div className="absolute -inset-2 bg-red-500/10 rounded-3xl blur-xl group-hover:bg-red-500/20 transition duration-500"></div>
          <img
            src={faqImg}
            className="relative w-full h-[300px] md:h-[450px] rounded-3xl object-cover shadow-2xl border-4 border-white"
            alt="faq image"
          />
        </div>

        {/* Right Side: Accordion with Navy-Red Theme */}
        <div className="flex-1 w-full">
          <div className="join join-vertical w-full gap-3 bg-transparent">
            {/* Question 1 */}
            <div className="collapse collapse-arrow join-item border border-slate-200 bg-white rounded-2xl shadow-sm">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-lg md:text-xl font-bold text-[#052c65]">
                How can I borrow a book from the library?
              </div>
              <div className="collapse-content text-slate-600 leading-relaxed">
                <p>
                  To borrow a book, browse our catalog and click the **Borrow**
                  button. Once confirmed, you'll receive an email with
                  instructions. Please bring a valid ID when collecting your
                  book from the library desk.
                </p>
              </div>
            </div>

            {/* Question 2 */}
            <div className="collapse collapse-arrow join-item border border-slate-200 bg-white rounded-2xl shadow-sm">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg md:text-xl font-bold text-[#052c65]">
                What is the borrowing period?
              </div>
              <div className="collapse-content text-slate-600 leading-relaxed">
                <p>
                  The standard borrowing period is **30 days**. You can request
                  a renewal online through your dashboard if no one else has
                  reserved the same book.
                </p>
              </div>
            </div>

            {/* Question 3 */}
            <div className="collapse collapse-arrow join-item border border-slate-200 bg-white rounded-2xl shadow-sm">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg md:text-xl font-bold text-[#052c65]">
                Can I reserve a book currently checked out?
              </div>
              <div className="collapse-content text-slate-600 leading-relaxed">
                <p>
                  Yes! You can place a hold. Once the book is returned, we will
                  notify you immediately, and it will be reserved for you for
                  **3 business days**.
                </p>
              </div>
            </div>

            {/* Question 4 */}
            <div className="collapse collapse-arrow join-item border border-slate-200 bg-white rounded-2xl shadow-sm">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-lg md:text-xl font-bold text-[#052c65]">
                What if the book I want is already borrowed?
              </div>
              <div className="collapse-content text-slate-600 leading-relaxed">
                <p>
                  Simply click the **Reserve** button on the book details page.
                  You'll join the waiting list and get an automated email as
                  soon as it's available for pick-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Container>
  );
};

export default Faq;
