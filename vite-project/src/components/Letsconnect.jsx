import React, { useState } from 'react'
import axios from 'axios'

const LetsConnect = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    let data = { name, email, message }
    console.log("Sending data:", data)

    try {
      let result = await axios.post(
        "https://68cac824430c4476c34aefa9.mockapi.io/letsconnect",
        data
      )

      if (result.status === 201 || result.status === 200) {
        //  Clear input fields after success
        setName('')
        setEmail('')
        setMessage('')
        alert("✅ Message sent successfully!")
      }
    } catch (error) {
      console.error("❌ Error sending message:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="letsconnect"
      className="py-5"
      
    >
      <div className="container" style={{
          paddingTop: "100px",  // more space above
          paddingBottom: "100px", // more space below
        }}>
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6" style={{ color: "#eef2f3ff" }}>
            Let’s Connect
          </h2>
          <p className="lead" style={{ color: "#bbb" }}>
            Have a project in mind, a collaboration, or just want to say hi?  
            Drop me a message below 🚀
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-4 rounded shadow-lg"
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            background:
              "linear-gradient(135deg, rgba(20,20,20,0.95), rgba(40,40,40,0.95))",
            border: "1px solid #222",
          }}
        >
          {/* Name */}
          <div className="mb-3" style={{ color: "#eef2f3ff" }}>
            <label className="form-label fw-semibold text-color:white">Your Name</label>
            <input
              type="text"
              className="form-control bg-dark text-light border-0"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3"style={{ color: "#eef2f3ff" }}>
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              className="form-control bg-dark text-light border-0"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div className="mb-3"style={{ color: "#eef2f3ff" }}>
            <label className="form-label fw-semibold">Message</label>
            <textarea
              rows="5"
              className="form-control bg-dark text-light border-0"
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="btn px-5 py-2 fw-bold"
              disabled={loading}
              style={{
                background: loading
                  ? "linear-gradient(90deg, #555, #777)"
                  : "linear-gradient(90deg, #ff6bebff, #a200ffff)",
                border: "none",
                color: "#fff",
                borderRadius: "30px",
                boxShadow: "0 0 15px rgba(0, 0, 0, 0.6)",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => (e.target.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.target.style.opacity = "1")}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default LetsConnect
