import { Button } from 'antd'
import React, { Fragment } from 'react'

const ContinueWithButtons = () => {
  return (
    <Fragment>
          <div
            style={{
        
              width: "%100",
              textAlign: "center",
              borderBottom: "1px solid #000",
              lineHeight: "0.1em",
              margin: "10px 0 20px",
            }}
          >
            <span
              style={{
                background: "#fff",
                padding: "0 10px",
              }}
            >
              {" "}
              or continue with
            </span>
          </div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Button 
              style={{
                width: "100%",
                height: 50,
                borderRadius: 10,
                color: "#222",
                fontSize: 14,
                padding: "10px 12px",
                marginBottom: 10,
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 0, flexShrink: 1, color: "#95a5a6" }}>
                  <i class="fas fa-mobile"></i>
                </div>
                <div style={{ flexGrow: 1, flexShrink: 1 }}>
                  <div>Continue with phone</div>
                </div>
              </div>
            </Button>
            <Button
              style={{
                width: "100%",
                height: 50,
                borderRadius: 10,
                color: "#222",
                fontSize: 14,
                padding: "10px 12px",
                marginBottom: 10,
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 0, flexShrink: 1, color: "#3b5998" }}>
                  <i class="fab fa-facebook"></i>
                </div>
                <div style={{ flexGrow: 1, flexShrink: 1 }}>
                  <div>Continue with facebook</div>
                </div>
              </div>
            </Button>

            <Button
              style={{
                width: "100%",
                height: 50,
                borderRadius: 10,
                color: "#222",
                fontSize: 14,
                padding: "10px 12px",
                marginBottom: 10,
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 0, flexShrink: 1, color: "#db4437" }}>
                  <i class="fab fa-google"></i>
                </div>
                <div style={{ flexGrow: 1, flexShrink: 1 }}>
                  <div>Continue with google</div>
                </div>
              </div>
            </Button>
            <Button
              style={{
                width: "100%",
                height: 50,
                borderRadius: 10,
                color: "#222",
                fontSize: 14,
                padding: "10px 12px",
                marginBottom: 10,
                lineHeight: "24px",
              }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 0, flexShrink: 1, fontSize: 18 }}>
                  <i class="fab fa-apple"></i>
                </div>
                <div style={{ flexGrow: 1, flexShrink: 1 }}>
                  <div>Continue with apple</div>
                </div>
              </div>
            </Button>
          </div>
    </Fragment>
  )
}

export default ContinueWithButtons