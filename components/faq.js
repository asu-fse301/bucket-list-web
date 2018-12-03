import { useFormInput } from '../utils/useFormInput';

function FAQ() {
  let { question, onChange: onChangeQuestion } = useFormInput();
  let { email, onChange: onChangeEmail } = useFormInput();
  let host = typeof window !== 'undefined' ? window.location.host : 'genie';

  return (
    <section className="FAQ">
      <div>
        <h3 children="Frequently Asked Questions" />
        <h4>Who are you?</h4>
        <ul>
          {[
            {
              name: 'Katelin Jensen',
              title: 'CEO',
              details:
                'Leads in organizing meetings, getting all assignments and team photos turned in, updating tasks on project board',
            },
            {
              name: 'Harley Sweigart',
              title: 'CFO',
              details:
                'Researches potential costs in regards to app development, database management, company insurance, employee wages, advertising, along with potential sources of revenue',
            },
            {
              name: 'Macayla Anderson',
              title: 'COO',
              details:
                'Manages customer testing and provides insight into market research, along with how to utilize it effectively, also provides major support when preparing financial statements due to previous knowledge and experience with business',
            },
            {
              name: 'Danny Tunney',
              title: 'CTO',
              details:
                'Architects app and website, writes and maintains the code',
            },
            {
              name: 'Sangjukta Chowdhury',
              title: 'CCO',
              details:
                'Leads the Brainstorming sessions, researches other available ideas and formulates features that have a competitive edge over other products, considers customer feedback for new ideas and features',
            },
          ].map(({ details, name, title }) => (
            <li key={name}>
              <p className="Name">{name}</p>
              <p>{title}</p>
              <p>{details}</p>
            </li>
          ))}
        </ul>
        <h4>When does the campaign start?</h4>
        <p>1/1/2019</p>
        <h4>How can I get the app?</h4>
        <p>
          Currently, we only have the prototype available{' '}
          <a
            href="https://snack.expo.io/@dtun/bucket-list-app"
            rel="noopener noreferrer"
            target="_blank"
          >
            here
          </a>
          . The application will launch in 2019 with early access for
          individuals who provide support to the campaign.
        </p>
      </div>
      <form action="https://formspree.io/dtun@asu.edu" method="POST">
        <textarea
          onChange={e => onChangeQuestion(e.target.value)}
          placeholder="Ask anything..."
          required
          type="text"
          value={question}
        />
        <input
          onChange={e => onChangeEmail(e.target.value)}
          name="email"
          placeholder="example@domain.com"
          required
          type="email"
          value={email}
        />
        <button children="Submit Question" type="submit" />
        <input name="_next" type="hidden" value={`https://${host}/thanks`} />
        <input name="_format" type="hidden" value="plain" />
      </form>
    </section>
  );
}

export default FAQ;
