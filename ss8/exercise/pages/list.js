import React from 'react'
import axios from 'axios';
export default function list({data}) {
  return (
    <div>
        <h1>Covid-19 information</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>States</th>
                        <th>Positive</th>
                        <th>Negative</th>
                        <th>Death</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td>{value.date}</td>
                                <td>{value.states}</td>
                                <td>{value.positive}</td>
                                <td>{value.negative}</td>
                                <td>{value.death}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
    </div>
  )
}
export async function getStaticProps() {
    const result = await axios.get(`https://api.covidtracking.com/v1/us/daily.json`);
    const data = result.data;
    return {
        props: {
            data
        }
    }
}
