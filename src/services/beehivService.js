import fetch from "node-fetch";

export async function subscribeUser(email) {
    const response = await fetch("https://api.beehiiv.com/v2/subscribers", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${process.env.BEHIIV_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            publication_id: process.env.PUBLICATION_ID,
            email,
            send_welcome_email: true,
        }),
    });

    return response.json();
}
