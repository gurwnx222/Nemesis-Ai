import axios from "axios";

export async function POST(req) {
    
    try {
        const body = await req.json();

        // send to aws Backend 
        const res = await axios.post(
            "https://jpxf8u79xe.execute-api.us-east-1.amazonaws.com/api/email",
            body,
            {
                headers: { "Content-Type": "application/json"},
            }
        );

        return new Response(JSON.stringify(res.data), {
            status: res.status,
            headers:{ "Content-Type" : "application/json"},
        });
    } catch (error) {
        console.error("Proxy error : ", error.message);
        return new Response(
            JSON.stringify({ error: "Something went wrong"}),
            {status: 500}
        );
    }
}