import React, { useState } from 'react';

function Faq() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqData = [
    {
      question: 'What is the atmosphere of DMC ?',
      answer:
        'The present campus of the college is situated in a scenic environment near Santragachi County Club. The college has all kinds of modern services. The college has its own enclosed grounds for female sports, digital classrooms and recreational facilities.',
    },
    {
      question: 'Why should you study in DMC ?',
      answer: 'Answer to why you should study in DMC will go here.',
    },
    {
      question: 'What kind of course do we teach in DMC ?',
      answer: 'Answer detailing the courses taught in DMC will go here.',
    },
    {
      question: 'What is the enrollment process in DMC ?',
      answer: 'Answer explaining the DMC enrollment process will go here.',
    },
    {
      question: 'How does DMC work ?',
      answer: 'General information on how DMC operates will go here.',
    },
    {
      question: 'How do I change my Course ?',
      answer: 'Answer on the procedure to change courses within DMC will go here.',
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-500">
            Everything you need to know about the DMC and Courses .
          </p>
        </div>
        <div className="mt-6 divide-y divide-gray-200">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="py-4 sm:py-5"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.question}
                </h3>
                <button
                  onClick={() => toggleQuestion(index)}
                  className="ml-6 h-6 w-6 rounded-full border border-blue-900 flex items-center justify-center text-blue-900 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 "
                  aria-expanded={openQuestion === index}
                >
                  {openQuestion === index ? (
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {openQuestion === index && (
                <div className="mt-2 text-gray-500">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;