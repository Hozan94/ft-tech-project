// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
if (req.method == "POST"){


    const response = await fetch(`https://api.ft.com/content/search/v1?apiKey=59cbaf20e3e06d3565778e7b6e0044a4fa7f43429198e666d8c855a0`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "queryString": `${req.body.name}`,
            "resultContext": {
                "aspects": ["title", "lifecycle", "location", "summary", "editorial"]
            }
        }),
        method: 'post'
    })

    const parsResponse = await response.json();
    //console.log(parsResponse)
    res.status(200).json(parsResponse)
} else {
    const response = await fetch(`https://api.ft.com/content/search/v1?apiKey=59cbaf20e3e06d3565778e7b6e0044a4fa7f43429198e666d8c855a0`, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "queryString": `bank`,
            "resultContext": {
                "aspects": ["title", "lifecycle", "location", "summary", "editorial"]
            }
        }),
        method: 'post'
    })

    const parsResponse = await response.json();
    res.status(200).json(parsResponse)
}
    
}
