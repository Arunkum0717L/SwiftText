# 📲 React Native Messenger App

A simple real-time chat app built using **React Native (Expo)** and **Firebase**.  
Supports user authentication and one-to-one messaging using Firestore.

---

## 🔥 Features
- 🔐 User Signup & Login (Firebase Auth)
- 💬 Real-time Messaging (Firestore + Gifted Chat)
- 🟢 Online/Offline Messaging Experience
- 🖼️ User Avatars (customizable)
- 💨 Fast UI with React Native (Expo)

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/react-native-messenger-app.git
cd react-native-messenger-app

2. Install Dependencies

Make sure you have Node.js and Expo CLI installed.

npm install
npx expo start

3. Set Up Firebase 🔧

    Go to Firebase Console

    Create a project

    Enable:

        Authentication → Email/Password

        Cloud Firestore

        (Optional) Storage for media messages

    Get your Firebase config keys.

📱 Run on Android

Use Expo Go to scan the QR code in the terminal:

npx expo start

📂 Project Structure

MessengerApp/
├── App.js
├── firebase.js
├── /screens
│   ├── LoginScreen.js
│   ├── SignupScreen.js
│   └── ChatScreen.js
└── /components
    └── ChatMessage.js (Optional UI component)

🛠 Future Features (Optional)

    ✅ Push Notifications with FCM

    ✅ Dark Mode / Light Mode

    ✅ Chat Rooms

    ✅ Media Sharing (Images, Audio)

    ✅ Online Status with Firestore Presence

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss.
