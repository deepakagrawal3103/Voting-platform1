function confirmVote() {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    
    if (!selectedCandidate) {
        alert('Please select a candidate before submitting your vote.');
        return;
    }
    
    const confirmation = confirm('Are you sure you want to submit your vote?');
    
    if (confirmation) {
        alert('Your vote has been submitted!');
    }
}
