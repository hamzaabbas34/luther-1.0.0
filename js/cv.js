
document.getElementById('download-btn').addEventListener('click', function () {
    // Create an <a> element
    const a = document.createElement('a');
    a.href = './images/Haseeb Ahmed (2).pdf'; // Replace with the relative path to your PDF
    a.download = 'Haseeb_Ahmed_CV.pdf'; // The filename for the downloaded file
    document.body.appendChild(a); // Append the element to the DOM
    a.click(); // Programmatically click the <a> element
    document.body.removeChild(a); // Remove the element from the DOM
});
