const errorMessage = {
    notFound: (fields: string): string => {
        return `${fields} not found`;
    },
    pleaseProvide: (fields: string[]): string => {
        return `Please provide ${fields?.join(",")}`;
    },
    invalidDate: 'Due date must be a valid ISO date string',
    invalidStatus: (TaskStatus): string => {
        return `Status must be one of: ${Object.values(TaskStatus).join(', ')}`
    },
    invalidPriority: (TaskPriority): string => {
        return `Priority must be one of: ${Object.values(TaskPriority).join(', ')}`
    }, 
};
  
const successMessage = {
    storeAvailable: "Store name is available",
    healthOk: "Greeka.com task submission server is healthy!",
    userRegistered: "Registration successful",
};

const emailMessages = {
    verifyEmailSubject: "Greeka.com: Welcome to Our Platform! 🚀",
    verifyEmailBody: (userName: string, verificationUrl: string): string => {
        return `<div style="font-family: Arial, sans-serif;">
        <h2>Welcome, ${userName}! 🎉</h2>
        <p>Thanks for joining us! Please verify your email by clicking the button below:</p>
        <a href="${verificationUrl}" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px;">Verify Your Email</a>
        <p>If you didn’t sign up, ignore this email.</p>
        <p>Need help? Contact us at contact@greeka.com</p>
        <p>© 2025 Greeka LLC. All rights reserved.</p>
        </div>`;
    },
    sendOtpSubject: "Greeka.com: Forgot password recovery",
    sendOtpBody: (userName: string, otp: number): string => {
        return `<div style="max-width: 400px; background: #ffffff; padding: 20px; border-radius: 8px; 
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); text-align: center; font-family: Arial, sans-serif;">
        <h2 style="color: #333;">Password Reset Request</h2>
        <p style="color: #555;">Dear <strong>${userName}</strong>,</p>
        <p style="color: #555;">We have received your request to reset your password.</p>
        <p style="color: #333; font-size: 18px; font-weight: bold;">Your OTP:</p>
        <div style="font-size: 24px; font-weight: bold; color: #2d89ef; background: #f4f4f4; 
                padding: 10px; display: inline-block; border-radius: 4px;">
        ${otp}
        </div>
        <p style="color: #777; font-size: 12px; margin-top: 20px;">If you didn't request this, please ignore this email.</p>
        </div>`;
    }
};

const commonMessage = {
    someEmailExists: "Email already exist",
  };

export { errorMessage, successMessage, emailMessages, commonMessage };