import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, service, message } = await request.json()

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Here you would typically:
    // 1. Send email via SMTP (nodemailer, SendGrid, etc.)
    // 2. Save to database
    // 3. Send to CRM system

    // For demo purposes, we'll just log the data
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      service,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate email sending
    // const transporter = nodemailer.createTransporter({...})
    // await transporter.sendMail({...})

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
