# 🌟 **Live Data Refresh in Salesforce** 🌟

This project implements a **Live Data Refresh** feature in Salesforce using **Lightning Web Components (LWC)** and an **Apex class**. It allows users to select any **queryable Salesforce object** and view the **latest 20 records** of that object, automatically refreshing the data every 5 seconds without needing to refresh the page.

## 📋 **Features**

- **🔄 Dynamic Object Selection**: Choose any queryable Salesforce object (e.g., Account, Contact, Opportunity) from a dropdown.
- **📊 Real-time Data**: Displays the latest 20 records of the selected object.
- **⏱ Live Updates**: The records are refreshed automatically every 5 seconds.
- **⚙️ Fully Customizable**: Easily add or modify Salesforce objects in the selection list.

## 🚀 **Getting Started**

### 1. **Clone the Repository**

Clone this repository to your local machine:

```bash
git clone https://github.com/KislayKashyap-hub/Live-Data-Refresh.git
cd Live-Data-Refresh
```

### 2. **Authenticate with Salesforce**

Authenticate your Salesforce org using Salesforce CLI:

```bash
sfdx auth:web:login -d -a my-sfdx-org
```

This command will open a browser for you to log into Salesforce.

### 3. **Deploy to Salesforce**

After authenticating, deploy the Apex class and Lightning Web Components to your Salesforce org:

**Deploy Apex Class**:

```bash
sfdx force:source:deploy -p force-app/main/default/classes/LiveRecordFetch.cls
```

**Deploy LWC Components**:

```bash
sfdx force:source:deploy -p force-app/main/default/lwc/LiveDataRecord
```

### 4. **Add the Component to a Lightning Page**

1. Navigate to **App Builder** in Salesforce.
2. Add the `LiveDataComponent` to your desired page (e.g., App Page, Record Page).
3. Save and **publish** the changes.

## 💡 **How It Works**

1. **Select an Object**: From the dropdown, choose an object (e.g., `Account`, `Contact`, `Opportunity`).
2. **View Records**: The component will display the **latest 20 records** for the selected object.
3. **Automatic Refresh**: The data updates every **5 seconds** to ensure it’s always up-to-date.

## 📈 **Technologies Used**

- **⚡ Lightning Web Components (LWC)**: For creating dynamic and interactive UI.
- **🔍 Apex**: For querying Salesforce objects and returning the data.
- **📦 Salesforce CLI**: For deployment and Salesforce org management.
- **💾 Git**: For version control and collaboration.

## 🌍 **Example**

Here's what happens when you select **Account** from the dropdown:
- The component will show the **latest 20 Account records** based on the `CreatedDate` field.
- The data will automatically refresh every **5 seconds** to display the most current records.

---

## 💪 **Contributing**

We welcome contributions to this project! Here's how you can get involved:

1. **Fork** the repository.
2. **Create** a new branch (`git checkout -b feature-name`).
3. **Make changes** and **commit** them (`git commit -m "Description of changes"`).
4. **Push** to your branch (`git push origin feature-name`).
5. **Submit a pull request** with a description of what you’ve done.

If you encounter any bugs or have suggestions, please **open an issue**!

## 📑 **License**

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### **Connect with Me!** 🤝

Feel free to connect with me for collaboration, questions, or just a friendly chat! 😊

- **LinkedIn**: [Kislay Kumar](https://www.linkedin.com/in/kislay-kumar-kk/) 💼
- **Email**: [kislay.tech@gmail.com](mailto:kislay.gmail@gmail.com) 📧
- **Trailhead Profile**: [Kislay Kumar](https://www.salesforce.com/trailblazer/g88z22m1ullatkw2wr) 🐦



---

## 🌟 **Trailhead & Learning**

Looking to learn more about Salesforce and Lightning Web Components? Here are some awesome Trailhead modules:

- **Trailhead - Lightning Web Components**: [Trailhead LWC Basics](https://trailhead.salesforce.com/en/content/learn/modules/lightning-web-components-basics)
- **Trailhead - Salesforce Apex**: [Apex Basics](https://trailhead.salesforce.com/en/content/learn/modules/apex-basics-and-advanced-apex)
- **Trailhead - Salesforce CLI**: [Salesforce CLI](https://trailhead.salesforce.com/en/content/learn/modules/sfdx_app_dev)

---

### **Troubleshooting** 🛠

If you run into issues:
- **Error: "No records found"**: Double-check that the object has records, and ensure it’s queryable in Salesforce.
- **Data isn’t updating**: Ensure that polling is enabled and check for network or Salesforce data access issues.
- **Permission Issues**: Make sure the user has proper read access to the object you're querying.

---

### **🙋‍♂️ Need Help?**

Feel free to reach out through **GitHub Issues** or contact me directly at [kislay.tech@gmail.com](mailto:kislay.gmail@gmail.com) 📧.

---

## 🔗 **Links**

- **Salesforce Developer Docs**: [Salesforce Docs](https://developer.salesforce.com/)
- **Salesforce CLI**: [CLI Documentation](https://developer.salesforce.com/tools/sfdxcli)

---

### **Summary**

With this **Live Data Refresh** project, you can **select any Salesforce object**, view its latest records, and have that data updated in real-time every 5 seconds. It's perfect for creating interactive dashboards or real-time analytics in Salesforce.

---

### **💬 Share & Support**

If you found this project helpful, don't forget to ⭐️ it on GitHub and share it with your friends and colleagues! 😄
