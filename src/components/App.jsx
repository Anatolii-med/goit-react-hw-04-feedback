import Section from './Section/Section';
import StatRender from './statRender/statRender';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { useState } from 'react';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const stat = { good, neutral, bad };
    const buttonLabels = Object.keys(stat);

    function onButtonClick(name) {
        switch (name) {
            case 'good':
                setGood(prev => prev + 1);
                break;
            case 'neutral':
                setNeutral(prev => prev + 1);
                break;
            case 'bad':
                setBad(prev => prev + 1);
                break;
            default:
                return;
        }
    }

    function countTotalFeedback() {
        return good + bad + neutral;
    }

    function countPositiveFeedbackPercentage() {
        const positiveFeedback = Number.parseInt(
            (good / (good + neutral + bad)) * 100
        );
        return Number.isNaN(positiveFeedback) ? '0' : `${positiveFeedback} %`;
    }

    return (
        <>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    buttons={buttonLabels}
                    onLeaveFeedback={onButtonClick}
                />
            </Section>

            <Section title="Statistic">
                {countTotalFeedback() === 0 ? (
                    <span> No feedback given</span>
                ) : (
                    <StatRender
                        total={countTotalFeedback()}
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        positive={countPositiveFeedbackPercentage()}
                    />
                )}
            </Section>
        </>
    );
}

export default App;
