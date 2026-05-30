export const activationHtml = (activationLink: string): string =>
  `
              <!DOCTYPE html>
              <html>
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Activate Your Account</title>
              </head>
              <body style="margin: 0; padding: 0; background-color: #f9f9f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: #f9f9f9; padding: 40px 20px;">
                  <tr>
                    <td align="center">
                      <table width="100%" class="content" style="max-width: 600px; background-color: #ffffff; border: 1px solid #e9e9e9; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
                        
                        <tr>
                          <td align="center" style="padding: 40px 40px 20px 40px; border-bottom: 1px solid #f5f5f5;">
                            <div style="font-size: 28px; font-weight: 800; letter-spacing: 2px; color: #111111; text-transform: uppercase;">
                              YOUR BRAND
                            </div>
                            <div style="font-size: 11px; color: #888888; letter-spacing: 1px; text-transform: uppercase; margin-top: 5px;">
                              Online Clothing Store
                            </div>
                          </td>
                        </tr>

                        <tr>
                          <td style="padding: 40px;">
                            <h1 style="font-size: 22px; font-weight: 700; color: #111111; margin: 0 0 16px 0; text-align: center;">
                              Great to have you with us!
                            </h1>
                            <p style="font-size: 15px; line-height: 24px; color: #555555; margin: 0 0 32px 0; text-align: center;">
                              You have successfully registered at our online store. To unlock your personal account, exclusive offers, and order history, please verify your email address.
                            </p>
                            
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td align="center">
                                  <a href="${activationLink}" target="_blank" style="background-color: #111111; color: #ffffff; display: inline-block; padding: 16px 36px; font-size: 14px; font-weight: 600; text-decoration: none; text-transform: uppercase; letter-spacing: 1px; border-radius: 4px; transition: background-color 0.2s ease;">
                                    Verify Email
                                  </a>
                                </td>
                              </tr>
                            </table>

                            <p style="font-size: 12px; line-height: 18px; color: #999999; margin: 32px 0 0 0; text-align: center;">
                              If the button above doesn't work, copy and paste this link into your browser:<br>
                              <a href="${activationLink}" style="color: #111111; text-decoration: underline;">${activationLink}</a>
                            </p>
                          </td>
                        </tr>

                        <tr>
                          <td style="background-color: #111111; padding: 30px 40px; text-align: center;">
                            <p style="font-size: 12px; color: #ffffff; margin: 0 0 8px 0; opacity: 0.8;">
                              © ${new Date().getFullYear()} YOUR BRAND. All rights reserved.
                            </p>
                            <p style="font-size: 11px; color: #aaaaaa; margin: 0; opacity: 0.6;">
                              You are receiving this email because you registered on our website. If this wasn't you, simply ignore this message.
                            </p>
                          </td>
                        </tr>

                      </table>
                    </td>
                  </tr>
                </table>
              </body>
              </html>
            `;
