function sendEmail(number) {
    const email = "example@example.com"; // Replace with the desired email address
    const subject = `NOTIFCATION FROM COURT ${number}`;
    const body = `NOTIFCATION FROM COURT ${number}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
}
