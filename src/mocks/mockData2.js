function getFormatedDateOfDay(num, dateString) {
  const refDate = new Date(dateString);
  if (num > 1) {
    refDate.setDate(refDate.getDate() + (num - 1));
  }
  return refDate.toISOString().split('T')[0];
}

export function getScheduleDict2(dateString) {
  const formatedDate = getFormatedDateOfDay(1, dateString);

  return {
    [formatedDate]: [
      {
        Id: 'e538c28d-52df-0654-800f-6145909aca29',
        Title: 'General Practitioner',
        Name: 'Dr. Tyler Breaz',
        AvailableSlots: getAvailableSlotForPerson(1, formatedDate),
        PictureURL: '/api/Picture/e538c28d-52df-0654-800f-6145909aca29',
        PictureName: 'doctor_male_1',
      },
      {
        Id: '40abb954-2f57-4106-61ec-ddf2acfbf8ee',
        Title: 'General Practitioner',
        Name: 'Dr. Ariana Boonstra',
        AvailableSlots: getAvailableSlotForPerson(2, formatedDate),
        PictureURL: '/api/Picture/40abb954-2f57-4106-61ec-ddf2acfbf8ee',
        PictureName: 'doctor_female_1',
      },
      {
        Id: '8dfe2600-52d5-3b80-129a-45d796fbaefe',
        Title: 'General Practitioner',
        Name: 'Dr. Bonnie Duffett',
        AvailableSlots: getAvailableSlotForPerson(3, formatedDate),
        PictureURL: '/api/Picture/8dfe2600-52d5-3b80-129a-45d796fbaefe',
        PictureName: 'doctor_female_2',
      },
    ],
  };
}

function getAvailableSlotForPerson(personNum, formatedDate) {
  const d = new Date(formatedDate);
  let dayOfWeek = d.getDay();
  switch (dayOfWeek) {
    case 0:
    case 3:
    case 6:
      if (personNum === 1) {
        return {
          'd6cbca46-e010-457d-8a7e-c6b3a28d729b':
            dayOfWeek === 0 ? `${formatedDate}T08:00:00` : undefined,
          'd54c16cf-44dc-4352-ad68-6380aeba9f2a':
            dayOfWeek === 0 ? `${formatedDate}T08:15:00` : undefined,
          'b1494e9d-42aa-4d31-bd96-a5c5de557c4b': `${formatedDate}T08:30:00`,
          '15465fc7-56f6-4e99-9d49-e26fb4773927': `${formatedDate}T08:45:00`,
          'd6effe24-93a4-4e5d-8474-0c64059b3d8f': `${formatedDate}T09:00:00`,
          '9be3c9db-450e-4dbd-b6f7-b584b5b1c8aa': `${formatedDate}T09:15:00`,
          '523d9d66-32a9-4f94-90fb-6fb412545bcd': `${formatedDate}T09:30:00`,
          '546ad6da-1fe7-4081-a820-3c9e838aa453': `${formatedDate}T09:45:00`,
          '3ea1c27a-b0e5-4e25-af5e-8e0f9ad159a2': `${formatedDate}T10:00:00`,
          '426c2477-5cda-44a1-9354-14c33c5e90a7': `${formatedDate}T10:15:00`,
          'bd00a08f-3493-48c7-8f4f-a4a2dfe84f0a':
            dayOfWeek === 6 ? `${formatedDate}T10:30:00` : undefined,
          'bd0d5497-c62b-47aa-8493-5aaf335aa3b6':
            dayOfWeek === 6 ? `${formatedDate}T10:45:00` : undefined,
          '133d8e87-6c55-44c4-aed7-f19c835973b6':
            dayOfWeek === 6 ? `${formatedDate}T11:00:00` : undefined,
          'd8b7b0d1-1919-4224-8278-ba2d8482928c':
            dayOfWeek === 6 ? `${formatedDate}T11:15:00` : undefined,
          '0d2e54d4-9854-447a-a9b0-39187b77b789':
            dayOfWeek === 6 ? `${formatedDate}T11:30:00` : undefined,
          'cd56978a-2f58-4668-825a-d30e24a40ee3':
            dayOfWeek === 3 ? `${formatedDate}T11:45:00` : undefined,
          'c8f3f7fb-315d-4f13-a043-cba94c7c643b':
            dayOfWeek === 3 ? `${formatedDate}T12:00:00` : undefined,
          '59066218-41ac-4966-b701-599d4e0de8e4':
            dayOfWeek === 3 ? `${formatedDate}T12:15:00` : undefined,
          'f4e5eeaa-302a-4186-b5ce-0cd5d687005e':
            dayOfWeek === 3 ? `${formatedDate}T12:30:00` : undefined,
          '95dee031-6cb7-4644-b32e-9714c6b3e59d':
            dayOfWeek === 3 ? `${formatedDate}T12:45:00` : undefined,
          '12cbdc25-9fc7-4f4e-85f0-04d9f5e84913': `${formatedDate}T13:00:00`,
          'a8e4c382-e552-4a9d-b79f-008f73ee4edc': `${formatedDate}T13:15:00`,
          'a2341049-0eb3-4958-b735-2ab2222963cc': `${formatedDate}T13:30:00`,
          'fb3cc3d0-b4ce-4599-bc9e-d4d50a45f1a0': `${formatedDate}T13:45:00`,
          'aad89b10-872e-44bf-a838-3bae0cc9f2f8': `${formatedDate}T14:00:00`,
          '10db464a-6b1a-47f0-bcf0-16a07909693d': `${formatedDate}T14:15:00`,
          'd804fcd8-a49b-4eb9-8938-4523f57f2410': `${formatedDate}T14:30:00`,
          '68123fb0-14f2-4a5a-8182-277ae359f3d9': `${formatedDate}T14:45:00`,
          'b433b622-73ff-4062-aee4-4c6310e83a34': `${formatedDate}T15:00:00`,
          '5a6f2f7b-afe6-47db-b464-f3fd3ee60a31': `${formatedDate}T15:15:00`,
          '459423e4-306a-4b52-b4b1-38516850a131': `${formatedDate}T15:30:00`,
          '95e43cbd-497f-4060-b83e-018e979d455b': `${formatedDate}T15:45:00`,
          'eae46c56-85b2-4e4a-9d89-2527a43c6ead': `${formatedDate}T16:00:00`,
          'e7c5cb9a-51df-452e-aa30-5becaf5683ca': `${formatedDate}T16:15:00`,
          '59d106a1-9d5c-4f27-acc1-a48102b05f90': `${formatedDate}T16:30:00`,
          '2805e2bd-f884-4f72-b3ed-e71424bab0b0': `${formatedDate}T16:45:00`,
          'c6c5a1af-892c-4ece-b669-a13657b829a2': `${formatedDate}T17:00:00`,
          '2d9031d4-1ed0-48c9-8138-681c6410eafe': `${formatedDate}T17:15:00`,
          'd740d953-5410-4540-88bd-24cc84469ba8': `${formatedDate}T17:30:00`,
          '464fa55d-47dd-4cd4-826f-d02ccbc09211': `${formatedDate}T17:45:00`,
          'd086c8dc-e70a-49da-9bd3-22cf172be6f8': `${formatedDate}T18:00:00`,
          '3069c8fd-f128-4ca0-b6f7-38c06d31e41c': `${formatedDate}T18:15:00`,
          '852c96f5-cd20-4ebd-96de-50cc3f66ac64': `${formatedDate}T18:30:00`,
          '8b1d66d0-109a-428c-8f5c-3f9e9bf109bf': `${formatedDate}T18:45:00`,
          '6b721dd9-1ec6-4961-adeb-507bfd91426f': `${formatedDate}T19:00:00`,
          '3faa10e0-f253-4eda-ac1e-5038c5566b19':
            dayOfWeek === 0 ? `${formatedDate}T19:15:00` : undefined,
          '5687a4cc-1166-4528-a836-0fe2fd432be8':
            dayOfWeek === 0 ? `${formatedDate}T19:30:00` : undefined,
          '5e3d85ec-62f2-4af0-b330-67fa4d1d4464':
            dayOfWeek === 0 ? `${formatedDate}T19:45:00` : undefined,
          '3a9319a6-2099-48fd-8e07-a33e883f4d7b':
            dayOfWeek === 0 ? `${formatedDate}T20:00:00` : undefined,
        };
      } else if (personNum === 2) {
        return {
          '9e7bbebf-92b7-4f1b-a6fc-35a72778cd77':
            dayOfWeek === 0 ? `${formatedDate}T08:00:00` : undefined,
          '7a2d32c2-5f72-4b82-b500-0bcc3fc18c1a':
            dayOfWeek === 0 ? `${formatedDate}T08:15:00` : undefined,
          '186cf9d6-aeea-42a0-bcb4-42798f4d1b27':
            dayOfWeek === 6 ? `${formatedDate}T08:30:00` : undefined,
          'ee66c958-73d6-48a2-8645-1bbf549ad51f':
            dayOfWeek === 6 ? `${formatedDate}T08:45:00` : undefined,
          '655e17e7-487c-4680-9aa1-41a610095d8a':
            dayOfWeek === 6 ? `${formatedDate}T09:00:00` : undefined,
          '357ea510-a2cb-41b6-a67a-d18a02a12260':
            dayOfWeek === 3 ? `${formatedDate}T09:15:00` : undefined,
          '2a306785-3093-4e47-829d-5342c66b5c51':
            dayOfWeek === 3 ? `${formatedDate}T09:30:00` : undefined,
          '9379caf0-596c-4e34-80da-48904c001c54':
            dayOfWeek === 3 ? `${formatedDate}T09:45:00` : undefined,
          '332c5155-bc01-4df1-8a2c-76d0849afb16': `${formatedDate}T10:00:00`,
          'cb93ca92-c95d-44cc-9764-5e371490ee6c': `${formatedDate}T10:15:00`,
          'a65fe281-708b-47ad-83aa-644afc76d1fb': `${formatedDate}T10:30:00`,
          'c288a36e-2b41-4ecc-8d34-7d0ff543622c': `${formatedDate}T10:45:00`,
          '0d371459-1129-4437-81f1-e7b7af7376da': `${formatedDate}T11:00:00`,
          'a053fc80-c5ea-41b6-823a-85e70dee993d': `${formatedDate}T11:15:00`,
          '5912c71b-fab4-4390-aed4-31609632d8fc': `${formatedDate}T11:30:00`,
          '543fec11-2d4a-4328-8ef0-2d6c50bcbf16': `${formatedDate}T11:45:00`,
          '744022e0-54fb-41b5-b042-b4f8810d7e38': `${formatedDate}T12:00:00`,
        };
      } else {
        return {
          'd987cba9-c981-48df-aa44-175dbea979b4':
            dayOfWeek === 3 ? `${formatedDate}T12:00:00` : undefined,
          'df111c63-22c2-4acf-8efc-8148e3dc0ac9':
            dayOfWeek === 3 ? `${formatedDate}T12:15:00` : undefined,
          '5ca8fc83-8f5e-40c8-be33-6f34aa8e7f61':
            dayOfWeek === 3 ? `${formatedDate}T12:30:00` : undefined,
          '1b166742-6ced-4977-8386-168472c1ce6e':
            dayOfWeek === 0 ? `${formatedDate}T12:45:00` : undefined,
          '499a86ab-f684-4aaa-94f6-749cdeea9ae6':
            dayOfWeek === 0 ? `${formatedDate}T13:00:00` : undefined,
          '70cf2dc8-538e-48cf-a0e6-5c8ecc0174fb':
            dayOfWeek === 6 ? `${formatedDate}T13:15:00` : undefined,
          '12dbd846-fc64-4c2a-82fa-7d52f4476309':
            dayOfWeek === 6 ? `${formatedDate}T13:30:00` : undefined,
          '2fc0c30a-6581-4ff1-89a2-3f5d5af672c9': `${formatedDate}T13:45:00`,
          '197ba5db-7e8d-4b1b-9685-55a2ba91d8a8': `${formatedDate}T14:00:00`,
          '45f4bf0b-8908-41bb-9c51-daee264ab963': `${formatedDate}T14:15:00`,
          'fbce5dce-768e-450d-a30a-9c5d63892fa7': `${formatedDate}T14:30:00`,
          '1da6ea05-1e61-4e28-81fd-75d83a2f15fd': `${formatedDate}T14:45:00`,
          'aa0fb9f8-6c67-4ab3-87ff-76c1e1d708d2': `${formatedDate}T15:00:00`,
          'c43d5ad8-3100-4c27-a3e7-8bc75b0505f8': `${formatedDate}T15:15:00`,
          '67119487-e0f7-44f6-9104-94c2def232ad': `${formatedDate}T15:30:00`,
          'cd485d07-07a0-4050-b8bf-a5f4897d7999': `${formatedDate}T15:45:00`,
          '3f0f3d3b-4bc0-4b6e-ae1a-cdb510719f6c': `${formatedDate}T16:00:00`,
          '5877c117-1688-45d4-8feb-8b5b2ac743bd': `${formatedDate}T16:15:00`,
          'dc80b92c-3e24-464e-b1a7-edb2ef676c76': `${formatedDate}T16:30:00`,
          'ad090304-77ff-40c1-8574-c37dd306dd1f': `${formatedDate}T16:45:00`,
          '87e5128b-d134-4d67-aca2-eef56a800adc': `${formatedDate}T17:00:00`,
          'f740132c-a44e-4134-8aed-5a8b70c15bf4': `${formatedDate}T17:15:00`,
          'd3513ffb-e699-4f31-9515-df1b90782d42': `${formatedDate}T17:30:00`,
          '524a3bde-f131-4453-99e0-1ef45df39d38': `${formatedDate}T17:45:00`,
          'c670ffdd-345a-4b53-b767-87ec5c0eefba': `${formatedDate}T18:00:00`,
          '0656cb27-0be3-4d92-81d7-f752692e57cd': `${formatedDate}T18:15:00`,
          '44c145a5-aed1-4eca-81f4-4908a766a54f': `${formatedDate}T18:30:00`,
          '9cb5b97c-203f-42be-a9e7-b8fda99c63f6': `${formatedDate}T18:45:00`,
          '9ba90e2c-885d-4f91-b811-a50de27bf346': `${formatedDate}T19:00:00`,
          '33528206-8703-4483-8c0c-fe7cf8471906': `${formatedDate}T19:15:00`,
          '53935cdb-d892-4648-a328-08cc3a43e849': `${formatedDate}T19:30:00`,
          'a01fe071-d5f1-477e-aed4-1d76f51ee02b': `${formatedDate}T19:45:00`,
          '8b00d93e-2a41-42d0-b164-ab19e0002a1c': `${formatedDate}T20:00:00`,
        };
      }
    case 1:
    case 4:
      if (personNum === 1) {
        return {
          'd6cbca46-e010-457d-8a7e-c6b3a28da123': `${formatedDate}T08:00:00`,
          'd54c16cf-44dc-4352-ad68-6380aebaa123': `${formatedDate}T08:15:00`,
          'b1494e9d-42aa-4d31-bd96-a5c5de55a123': `${formatedDate}T08:30:00`,
          '15465fc7-56f6-4e99-9d49-e26fb477a123': `${formatedDate}T08:45:00`,
          'd6effe24-93a4-4e5d-8474-0c64059ba123': `${formatedDate}T09:00:00`,
          '9be3c9db-450e-4dbd-b6f7-b584b5b1a123': `${formatedDate}T09:15:00`,
          '523d9d66-32a9-4f94-90fb-6fb41254a123': `${formatedDate}T09:30:00`,
          '546ad6da-1fe7-4081-a820-3c9e838aa123': `${formatedDate}T09:45:00`,
          '3ea1c27a-b0e5-4e25-af5e-8e0f9ad1a123': `${formatedDate}T10:00:00`,
          '426c2477-5cda-44a1-9354-14c33c5ea123': `${formatedDate}T10:15:00`,
          'bd00a08f-3493-48c7-8f4f-a4a2dfe8a123': `${formatedDate}T10:30:00`,
          'bd0d5497-c62b-47aa-8493-5aaf335aa123': `${formatedDate}T10:45:00`,
          '133d8e87-6c55-44c4-aed7-f19c8359a123': `${formatedDate}T11:00:00`,
          'd8b7b0d1-1919-4224-8278-ba2d8482a123': `${formatedDate}T11:15:00`,
          '0d2e54d4-9854-447a-a9b0-39187b77a123': `${formatedDate}T11:30:00`,
          'cd56978a-2f58-4668-825a-d30e24a4a123': `${formatedDate}T11:45:00`,
          'c8f3f7fb-315d-4f13-a043-cba94c7ca123': `${formatedDate}T12:00:00`,
          '59066218-41ac-4966-b701-599d4e0da123': `${formatedDate}T12:15:00`,
          'f4e5eeaa-302a-4186-b5ce-0cd5d687a123': `${formatedDate}T12:30:00`,
          '95dee031-6cb7-4644-b32e-9714c6b3a123': `${formatedDate}T12:45:00`,
          '12cbdc25-9fc7-4f4e-85f0-04d9f5e8a123': `${formatedDate}T13:00:00`,
          'a8e4c382-e552-4a9d-b79f-008f73eea123': `${formatedDate}T13:15:00`,
          'a2341049-0eb3-4958-b735-2ab22229a123': `${formatedDate}T13:30:00`,
          'fb3cc3d0-b4ce-4599-bc9e-d4d50a45a123': `${formatedDate}T13:45:00`,
          'aad89b10-872e-44bf-a838-3bae0cc9a123': `${formatedDate}T14:00:00`,
          '10db464a-6b1a-47f0-bcf0-16a07909a123': `${formatedDate}T14:15:00`,
          'd804fcd8-a49b-4eb9-8938-4523f57fa123': `${formatedDate}T14:30:00`,
          '68123fb0-14f2-4a5a-8182-277ae359a123': `${formatedDate}T14:45:00`,
          'b433b622-73ff-4062-aee4-4c6310e8a123': `${formatedDate}T15:00:00`,
          '5a6f2f7b-afe6-47db-b464-f3fd3ee6a123': `${formatedDate}T15:15:00`,
          '459423e4-306a-4b52-b4b1-38516850a123': `${formatedDate}T15:30:00`,
          '95e43cbd-497f-4060-b83e-018e979da123': `${formatedDate}T15:45:00`,
          'eae46c56-85b2-4e4a-9d89-2527a43ca123': `${formatedDate}T16:00:00`,
          'e7c5cb9a-51df-452e-aa30-5becaf56a123': `${formatedDate}T16:15:00`,
          '59d106a1-9d5c-4f27-acc1-a48102b0a123': `${formatedDate}T16:30:00`,
          '2805e2bd-f884-4f72-b3ed-e71424baa123': `${formatedDate}T16:45:00`,
          'c6c5a1af-892c-4ece-b669-a13657b8a123': `${formatedDate}T17:00:00`,
          '2d9031d4-1ed0-48c9-8138-681c6410a123': `${formatedDate}T17:15:00`,
          'd740d953-5410-4540-88bd-24cc8446a123': `${formatedDate}T17:30:00`,
          '464fa55d-47dd-4cd4-826f-d02ccbc0a123': `${formatedDate}T17:45:00`,
          'd086c8dc-e70a-49da-9bd3-22cf172ba123': `${formatedDate}T18:00:00`,
          '3069c8fd-f128-4ca0-b6f7-38c06d31a123': `${formatedDate}T18:15:00`,
          '852c96f5-cd20-4ebd-96de-50cc3f66a123': `${formatedDate}T18:30:00`,
          '8b1d66d0-109a-428c-8f5c-3f9e9bf1a123': `${formatedDate}T18:45:00`,
          '6b721dd9-1ec6-4961-adeb-507bfd91a123': `${formatedDate}T19:00:00`,
          '3faa10e0-f253-4eda-ac1e-5038c556a123': `${formatedDate}T19:15:00`,
          '5687a4cc-1166-4528-a836-0fe2fd43a123': `${formatedDate}T19:30:00`,
          '5e3d85ec-62f2-4af0-b330-67fa4d1da123': `${formatedDate}T19:45:00`,
          '3a9319a6-2099-48fd-8e07-a33e883fa123': `${formatedDate}T20:00:00`,
        };
      } else if (personNum === 2) {
        return {
          'cb93ca92-c95d-44cc-9764-5e371490e023': `${formatedDate}T10:15:00`,
          'a65fe281-708b-47ad-83aa-644afc76d023': `${formatedDate}T10:30:00`,
          'c288a36e-2b41-4ecc-8d34-7d0ff5436023': `${formatedDate}T10:45:00`,
          '0d371459-1129-4437-81f1-e7b7af737023': `${formatedDate}T11:00:00`,
          'a053fc80-c5ea-41b6-823a-85e70dee9023': `${formatedDate}T11:15:00`,
        };
      } else {
        return {
          '45f4bf0b-8908-41bb-9c51-daee264ab711': `${formatedDate}T14:15:00`,
          'fbce5dce-768e-450d-a30a-9c5d63892711': `${formatedDate}T14:30:00`,
          '1da6ea05-1e61-4e28-81fd-75d83a2f1711': `${formatedDate}T14:45:00`,
          'aa0fb9f8-6c67-4ab3-87ff-76c1e1d70711': `${formatedDate}T15:00:00`,
          'c43d5ad8-3100-4c27-a3e7-8bc75b050711': `${formatedDate}T15:15:00`,
          '67119487-e0f7-44f6-9104-94c2def23711': `${formatedDate}T15:30:00`,
          'cd485d07-07a0-4050-b8bf-a5f4897d7711': `${formatedDate}T15:45:00`,
          '3f0f3d3b-4bc0-4b6e-ae1a-cdb510719711': `${formatedDate}T16:00:00`,
          '5877c117-1688-45d4-8feb-8b5b2ac74711': `${formatedDate}T16:15:00`,
        };
      }
    case 2:
    case 5:
      if (personNum === 1) {
        return {
          'd6cbca46-e010-457d-8a7e-c6b3a28d7333': `${formatedDate}T08:00:00`,
          'd54c16cf-44dc-4352-ad68-6380aeba9333': `${formatedDate}T08:15:00`,
          'b1494e9d-42aa-4d31-bd96-a5c5de557333': `${formatedDate}T08:30:00`,
          '15465fc7-56f6-4e99-9d49-e26fb4773333': `${formatedDate}T08:45:00`,
          'bd00a08f-3493-48c7-8f4f-a4a2dfe84333': `${formatedDate}T10:30:00`,
          'bd0d5497-c62b-47aa-8493-5aaf335aa333': `${formatedDate}T10:45:00`,
          '133d8e87-6c55-44c4-aed7-f19c83597333': `${formatedDate}T11:00:00`,
          '464fa55d-47dd-4cd4-826f-d02ccbc09333': `${formatedDate}T17:45:00`,
          'd086c8dc-e70a-49da-9bd3-22cf172be333': `${formatedDate}T18:00:00`,
          '3069c8fd-f128-4ca0-b6f7-38c06d31e333': `${formatedDate}T18:15:00`,
          '852c96f5-cd20-4ebd-96de-50cc3f66a333': `${formatedDate}T18:30:00`,
          '8b1d66d0-109a-428c-8f5c-3f9e9bf10333': `${formatedDate}T18:45:00`,
          '6b721dd9-1ec6-4961-adeb-507bfd914333': `${formatedDate}T19:00:00`,
          '3faa10e0-f253-4eda-ac1e-5038c5566333': `${formatedDate}T19:15:00`,
          '5687a4cc-1166-4528-a836-0fe2fd432333': `${formatedDate}T19:30:00`,
          '5e3d85ec-62f2-4af0-b330-67fa4d1d4333': `${formatedDate}T19:45:00`,
          '3a9319a6-2099-48fd-8e07-a33e883f4333': `${formatedDate}T20:00:00`,
        };
      } else if (personNum === 2) {
        return {
          '9e7bbebf-92b7-4f1b-a6fc-35a72778c333': `${formatedDate}T08:00:00`,
          '7a2d32c2-5f72-4b82-b500-0bcc3fc18333': `${formatedDate}T08:15:00`,
          '186cf9d6-aeea-42a0-bcb4-42798f4d1333': `${formatedDate}T08:30:00`,
          'ee66c958-73d6-48a2-8645-1bbf549ad333': `${formatedDate}T08:45:00`,
          '655e17e7-487c-4680-9aa1-41a610095333': `${formatedDate}T09:00:00`,
          '357ea510-a2cb-41b6-a67a-d18a02a12333': `${formatedDate}T09:15:00`,
          'a65fe281-708b-47ad-83aa-644afc76d333': `${formatedDate}T10:30:00`,
          'c288a36e-2b41-4ecc-8d34-7d0ff5436333': `${formatedDate}T10:45:00`,
          '0d371459-1129-4437-81f1-e7b7af737333': `${formatedDate}T11:00:00`,
          'a053fc80-c5ea-41b6-823a-85e70dee9333': `${formatedDate}T11:15:00`,
          '5912c71b-fab4-4390-aed4-31609632d333': `${formatedDate}T11:30:00`,
          '543fec11-2d4a-4328-8ef0-2d6c50bcb333': `${formatedDate}T11:45:00`,
          '744022e0-54fb-41b5-b042-b4f8810d7333': `${formatedDate}T12:00:00`,
        };
      } else {
        return {
          'aa0fb9f8-6c67-4ab3-87ff-76c1e1d70333': `${formatedDate}T15:00:00`,
          'c43d5ad8-3100-4c27-a3e7-8bc75b050333': `${formatedDate}T15:15:00`,
          '67119487-e0f7-44f6-9104-94c2def23333': `${formatedDate}T15:30:00`,
          'cd485d07-07a0-4050-b8bf-a5f4897d7333': `${formatedDate}T15:45:00`,
          '3f0f3d3b-4bc0-4b6e-ae1a-cdb510719333': `${formatedDate}T16:00:00`,
          '5877c117-1688-45d4-8feb-8b5b2ac74333': `${formatedDate}T16:15:00`,
          'dc80b92c-3e24-464e-b1a7-edb2ef676333': `${formatedDate}T16:30:00`,
          'ad090304-77ff-40c1-8574-c37dd306d333': `${formatedDate}T16:45:00`,
          '87e5128b-d134-4d67-aca2-eef56a800333': `${formatedDate}T17:00:00`,
          'f740132c-a44e-4134-8aed-5a8b70c15333': `${formatedDate}T17:15:00`,
          'd3513ffb-e699-4f31-9515-df1b90782333': `${formatedDate}T17:30:00`,
          '524a3bde-f131-4453-99e0-1ef45df39333': `${formatedDate}T17:45:00`,
          'c670ffdd-345a-4b53-b767-87ec5c0ee333': `${formatedDate}T18:00:00`,
          '53935cdb-d892-4648-a328-08cc3a43e333': `${formatedDate}T19:30:00`,
          'a01fe071-d5f1-477e-aed4-1d76f51ee333': `${formatedDate}T19:45:00`,
          '8b00d93e-2a41-42d0-b164-ab19e0002333': `${formatedDate}T20:00:00`,
        };
      }
    default:
      return {};
  }
}

export const providers2 = {
  'e538c28d-52df-0654-800f-6145909aca29': {
    Id: 'e538c28d-52df-0654-800f-6145909aca29',
    Name: 'Dr. Tyler Breaz',
    Title: 'General Practitioner',
    Description:
      'Dr. Tyler Breaz graduated from the University of Auckland in 1999. He has been working as a General Practitioner for 17 years, 8 years at MCAM and enjoys all aspects of General Practice, with special emphasis on preventative health care. His non-medical interests are fitness, reading and time with his family.',
    Languages: ['English', 'Italian', 'German'],
    Degrees: ['M.B.Ch.B', 'F.N.Z.C.G.P', 'Dip O&G'],
    PictureURL: '/api/Picture/e538c28d-52df-0654-800f-6145909aca29',
    PictureName: 'doctor_male_1',
  },
  '40abb954-2f57-4106-61ec-ddf2acfbf8ee': {
    Id: '40abb954-2f57-4106-61ec-ddf2acfbf8ee',
    Name: 'Dr. Ariana Boonstra',
    Title: 'General Practitioner',
    Description:
      'Canadian born, grew up in Brisbane and trained at Otago University. "I spent 5 years in London training under the Royal College of Surgeons in emergency medicine and after returning to NZ I completed my fellowship in general practice.I\'m married with 3 awesome adult children." As a Royal college educator and examiner, she also has a special interest in families, injury management and skin medicine.',
    Languages: ['English', 'Arabic'],
    Degrees: ['M.B.Ch.B', 'F.N.Z.C.G.P', 'DipO&G'],
    PictureURL: '/api/Picture/40abb954-2f57-4106-61ec-ddf2acfbf8ee',
    PictureName: 'doctor_female_1',
  },
  '8dfe2600-52d5-3b80-129a-45d796fbaefe': {
    Id: '8dfe2600-52d5-3b80-129a-45d796fbaefe',
    Name: 'Dr. Bonnie Duffett',
    Title: 'General Practitioner',
    Description:
      'Born in Sydney Australia, I completed my bachelor degrees at the University of Sydney. I moved to New Zealand over 10 years ago and I am a member of the Royal New Zealand Collage of General Practitioners.',
    Languages: ['English', 'French', 'Spanish'],
    Degrees: ['M.B.Ch.B', 'F.N.Z.C.G.P', 'Dip O&G'],
    PictureURL: '/api/Picture/8dfe2600-52d5-3b80-129a-45d796fbaefe',
    PictureName: 'doctor_female_2',
  },
};
