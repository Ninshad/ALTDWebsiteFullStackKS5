import React from 'react'

const UserTemplate = () => {
    return (
        // <div>
            <html>
      <body>
        <div><form action="" method="post" className="form" novalidate="novalidate">
                        <p>
                            <label>
                                <span className="form-control-wrap first-name">
                                    <input type="text" name="first-name"  size="40"  placeholder="Name" />
                                </span>
                            </label>
                            <label>
                                <span className="form-control-wrap first-name">
                                    <input type="email" name="your-email"  size="40" class=""  placeholder="Email" />
                                </span>
                            </label>
                            <label>
                                <span className="form-control-wrap first-name">
                                    <textarea name="your-message" cols="40" rows="10" placeholder="Message"></textarea>
                                </span>
                            </label>
                        </p>
                        <p>
                            <span className="list-item">
                                <label>
                                    <input type="checkbox" name="your-consent" value="1" aria-invalid="false" />
                                    <span className="list-item-label">I understand that ALT-D Technologies will securely hold my data in accordance with their <a href="#">Privacy Policy</a></span>
                                </label>
                            </span>
                            <span className="btn-submit">
                                <input type="submit" value="Submit" className="form-control submit submit-btn" />
                            </span>
                        </p>
                    </form></div>
      </body>
    </html>
            
        // </div>
    )
}

export default UserTemplate
