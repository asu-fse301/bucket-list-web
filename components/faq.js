import { useFormInput } from '../utils/useFormInput';

function FAQ() {
  let { question, onChange } = useFormInput();

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
                'Lead in organizing meeting dates/time, getting all assignments / team photos turned in on time (group effort), updating assignments tasks on Trello (group effort)',
            },
            {
              name: 'Harley Sweigart',
              title: 'Chief Financial Officer',
              details:
                'Researched on what potential costs would be in regards to app development, database management, company insurance, employee wages, advertisements as well as potential sources of revenue.',
            },
            {
              name: 'Macayla Anderson',
              title: 'Chief Operating Officer',
              details:
                'Helped manage customer testing and provided insights into the importance of market research and how to utilize it effectively. Also provided major support when preparing financial statements due to previous knowledge and experience with business.',
            },
            {
              name: 'Danny Tunney',
              title: 'Chief Technology Officer',
              details:
                'Architected app and website. Wrote and maintained the code.',
            },
            {
              name: 'Sangjukta Chowdhury',
              title: 'Chief Creative Officer',
              details:
                'Lead the Brainstorming sessions, researched other available ideas and formulated features that had a competitive edge over other products out their, considered customer feedback to come up with other new ideas and features.',
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
      <form>
        <textarea
          onChange={e => onChange(e.target.value)}
          required
          type="text"
          value={question}
        />
        <button children="Ask a question" type="submit" />
      </form>
    </section>
  );
}

export default FAQ;
