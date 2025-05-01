# SECCONDMART FRONTEND

### 1.Project Name: SeccondMart

### 2. Project Title: This is SeccondMart project that controls all work related to seccond hand product marketplace.

### 3. Key Features:

### User Functionalities:

- User can login into dashboard using email and password.
- User(Seller) can post an used product for sale.
- User(Buyer) can search for product by category, title and description.
- User(Buyer) can filter the product by category,condition and location.
- User(Buyer) can sort the product by price.
- User(Buyer) can add product to the wishlist.
- User can delete and update the already posted product for sale.
- User can view details of the product.
- User(Buyer) can purchase product by complete payment.
- User can track purchase history in dashboard.
- User can track sales history in dashboard.
- User can view purchased product in dashboard.
- User can view Sold product in dashboard.
- User(Buyer) can sending an inquiry before buying
- User(Seller) can responding to inquiries.
- User can edit his profile information.

### 4. Frontend Technology Used:

- React
- NextJs
- Shadcn ui
- Tailwind Css
- Typescript

### 5. Backend Technology Used:

- Typescript
- Express Js
- Mongoose
- MongoDB

### 5. Challenges:

During implementation, integrating effective search functionality was challenging due to the need for optimized keyword matching across multiple fields like title, category, and description. Filtering required careful handling of dynamic query parameters to ensure smooth and accurate results. Sorting by price had to be implemented efficiently without affecting performance, especially when combined with filters. Ensuring all combinations worked together seamlessly was complex. When implementing shurjopay payment integration method there is no type support.So, we need to create an type by manually that was too much hard.The shurjopay authority provide some incorrect output data that occured bugs when check payment is success or not.

### 6.Future Scope:

To enhance the current second-hand product selling platform, future work could focus on incorporating AI-powered product recommendations to improve the user shopping experience. Implementing a real-time chat feature between buyers and sellers would streamline communication and build trust. Adding multi-language support can broaden the platform’s accessibility to users from different regions. Introducing seller verification and product authenticity checks would boost buyer confidence and reduce fraud. Additionally, integrating a review and rating system for both buyers and sellers can help build credibility

## How to locally run the Frontend:

### 1. Clone the Repository

Run the following command in your terminal to clone the repository:

```javascript
git clone https://github.com/Apurbopaul131/Seccond-mart-client.git
```

### 2. Navigate to the Project Directory

Run the following command to by adding expected directory name:

```javascript
cd your-repo-name
```

### 3. Install Dependencies

Install the required dependencies using npm or yarn:

```javascript
npm install
// or
yarn install
```

### 4. Set Up Environment Variables

Create a .env file in the root directory of the project and add the following environment variables to configure your application:

```javascript
//.env
NEXT_PUBLIC_BASE_API=https://seccond-hand-server.vercel.app/api
```

### 5. Run the Project

```javascript
//development mode
npm run dev
```

### Frontend live link: https://seccond-hand-client.vercel.app

### project presentation vedio link: https://drive.google.com/file/d/1YVAq-MsVirrI2FRFQ00KNgKP9OqKNFI7/view?usp=sharing

Go to seccond mart backend source code using [SECCONDMART-BACKEND](https://github.com/Apurbopaul131/Seccond-mart-server.git)
