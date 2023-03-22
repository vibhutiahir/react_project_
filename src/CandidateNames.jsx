const CandidateNames = (props) => {
    console.log("props" , props);
    return (<ul>
        {
         props.candidateNames.map((candidateName) => {
            return <li key={candidateName}>{candidateName}</li>;
         })
        }
        </ul>);
};

export default CandidateNames;