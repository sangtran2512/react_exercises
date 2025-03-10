import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? "Chưa đủ dữ liệu" : ((good - bad) / total).toFixed(2);
  const positive = total === 0 ? "0%" : ((good / total) * 100).toFixed(2) + "%";  

  return (
    <div>
    <h2>Statistics</h2>
    <table>
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average" value={average} />
        <StatisticLine text="Positive" value={positive} />
        <StatisticLine text="bindo" value={"bindo"} />

      </tbody>
    </table>
  </div>
);
};
const Exc1 = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  const total = good + neutral + bad;

  return (
    <div>
      <h1>Give Feedback</h1>
      <br />
      <Button text="Good" onClick={handleGood} />
      <Button text="Neutral" onClick={handleNeutral} />
      <Button text="Bad" onClick={handleBad} />

      {total > 0 ? <Statistics good={good} neutral={neutral} bad={bad} /> : <p>No feedback given yet</p>}
    </div>
  );
};

export default Exc1;
