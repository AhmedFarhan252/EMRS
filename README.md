# Electronic Medical Records System (EMRS)

A record management system built for medical clinics to store and record relevant data that is daily generated.

---

## Deployed using Heroku: [e-m-r-s.herokuapp.com](https://e-m-r-s.herokuapp.com/)

---

## Libraries / Tools Used

- React JS (Frontend)
- Node JS (Backend)
- Express JS (Backend)
- PostgreSQL (Database)

---

## How it works

The basic setup of the EMRS system for a specific clinic is as follows:

1. The team manually setups admin accounts for the clinic.
2. The admin account can add doctor accounts and also remove doctor accounts.
3. New patients are automatically redirected to the registration page when they login for the first time on the EMRS website.

## Features and functionalities

### Admin

1. An admin account has the authority to add or remove doctor accounts.
2. An admin account can also add new diseases to the existing disease list at the clinic.

### Doctor

1. A doctor account is redirected to their profile page on login where they can view their basic information such as CNIC, Contact Number, and email. They may also edit this information if required.
2. A records tab shows all of the patient records that the doctor has managed. They can select a particular record to view the record details including the patient details, observation, prescription, private notes, and diseases. Additionally, they may click on the pdf button to open up the record in a pdf view and download it as a pdf.
3. The add record tab allows the doctor to create new patient records. They are given a list of existing patients registered within the system and they can select a specific patient to create their record.
4. The visualizations tab provides the doctor a bar chart which has the number of cases on the y-axis and the disease name on the x-axis. This chart shows the 5 most frequent disease cases from the past week.

### Patient

1. The patient account is redirected to their profile page on login where they can view and edit their basic information.
2. A record tab shows the patient their existing records within the system. They can select a particular record to view its details and can also download a pdf of the record.
