import { useState } from "react";
import { MdArrowCircleUp, MdArrowDropDownCircle } from "react-icons/md";
import { Fade } from "react-reveal";

function FaqItem(props) {
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  return (
    <>
      <Fade up duration={800}>
        {/* FAQ */}
        <div
          className="w-full mx-auto text-left mt-5 cursor-pointer"
          onClick={() => setIsFaqOpen(!isFaqOpen)}
        >
          {/* QUESTION */}
          <div className="bg-blupayBlue-300 h-16 flex justify-between align-middle px-10">
            <h4 className="my-auto font-medium">{props.question}?</h4>
            <button>
              {isFaqOpen ? (
                <span>
                  <MdArrowCircleUp size={28} className="text-solyntaYellow" />
                </span>
              ) : (
                <span>
                  <MdArrowDropDownCircle size={28} className="text-solyntaYellow" />
                </span>
              )}
            </button>
          </div>

          {/* ANSWER */}
          <div
            className="px-10 mt-5 shadow-sm pb-5"
            style={{
              display: isFaqOpen ? "block" : "none",
              height: !isFaqOpen ? "0px" : "auto",
            }}
          >
            <p>{props.answer}</p>
          </div>
        </div>
      </Fade>
    </>
  );
}

export default FaqItem;
