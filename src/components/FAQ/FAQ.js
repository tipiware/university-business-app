import React from "react"
import "./FAQ.css"

const FAQ = () => {
  return (
    <>
      <div className="faq-container">
        <section className="faq">
          <div className="faq-content">
            <div className="faq-question">
              <label htmlFor="q" className="panel-title-main">
                FAQ
              </label>
            </div>

            <div className="faq-question">
              <input id="q1" type="checkbox" className="panel" />
              <label htmlFor="q1" className="panel-title">
                How and When To Pay Your Fees
              </label>
              <div className="panel-content">
                Malaysian and International students
                <br />New students need to pay 50% of their tuition fees to confirm their place on the programme, before the first day of term. All returning students are required to pay the second half of the tuition fee at the start of the second term.
              </div>
            </div>
            <div className="faq-question">
              <input id="q2" type="checkbox" className="panel" />

              <label htmlFor="q2" className="panel-title">
              When should you apply?
              </label>
              <div className="panel-content">
              The application deadline for programmes is as follows:
              <ul>
                <li>
                For Malaysian students, 1 week before the programme starts;   
                </li>
                <li>
                For international students, 2 months before the programme starts
                </li>
              </ul>
              Adhering to these deadlines is very important because:
              <ul>
                <li>Your application may not be processed in time for you to begin your courses with us.</li>
                <li>All applications submitted after this deadline will not be put forward for Achievement scholarships.
                </li>
                <li>International applicants will risk not being able to get their travel documents (visas, etc.) processed in time to begin class. For more information on attaining visas, health and life insurance in Malaysia, please call the International Office.
                </li>
              </ul>

              </div>
            </div>
            <div className="faq-question">
              <input id="q3" type="checkbox" className="panel" />

              <label htmlFor="q3" className="panel-title">
                Late Payment of Fees
              </label>
              <div className="panel-content">
              Find out more on how to avoid additional charges for late payment of fees
              <br />
              Payment of the second instalment of tuition fees is required by the first day of the second semester. (For full-time students).
              <br />
              If you fail to make the payment, a RM10.00 fine will be incurred for each day (including weekends and public holidays) of the delayed settlement. Therefore, we kindly urge you to make the necessary arrangements to avoid this.
              </div>
            </div>
            <div className="faq-question">
              <input id="q4" type="checkbox" className="panel" />

              <label htmlFor="q4" className="panel-title">
              Refund Policy on Deposits and Fees paid
              </label>
              <div className="panel-content">
              The university will refund tuition fees deposit if the applicant has received a conditional offer but fail to satisfy the academic condition and meet the entry requirements into our programmes. However where the refund request is made for any other reasons including where the applicant is issued with an unconditional and further accepts the offer but then chooses to withdraw, refund will be subject to university policy plus a further deduction of RM1000 (administration fees) of the refundable fees. The request for refund must be made within one (1) academic year.         
              </div>
            </div>
            <div className="faq-question">
              <input id="q5" type="checkbox" className="panel" />

              <label htmlFor="q5" className="panel-title">
              Making a decision on your application
              </label>
              <div className="panel-content">
              Upon receiving your application, our Admissions Office will acknowledge your application by sending an email or if it is an online application, you will received an automated email stating your application has been successfully submitted.
              <br />
              You are advised to include all transcripts and certificates of your previous academic pursuance. These documents should clear copies and verified wherever applicable. We will be unable to process the application if the scanned copies are blurred. Should your application be incomplete, you will be notified to furnish us with further details that will aid in making our decision. Once your complete application (including all documentation) is received, a decision will be emailed to you within two working weeks. Assuredly, we will keep you updated on your application status throughout the application process.
              <br />
              The Malaysia Art University we welcomes applications from International Students (and is licensed by the Malaysian authorities to admit International Students). Please note that the application should be made in plenty of time because of the requirement to obtain a student visa. The University will provide advice and support during this process.
              <br />
              For information on additional requirements for immigration purposes that must be fulfilled by international students before entering Malaysia to study, please email the International Office at international@mau.edu.my or call +60123456789.
              <br />
                If your order arrives damaged, please contact us within 30 days
                to receive a replacement or refund.
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default FAQ
