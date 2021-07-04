import deepCopy from '../utils/deepCopy';

const now = new Date();

const labels = [
  {
    id: 'all',
    name: 'All Mail',
    type: 'system_label'
  },
  {
    id: 'inbox',
    name: 'Inbox',
    totalCount: 0,
    type: 'system_label',
    unreadCount: 1
  },
  {
    id: 'sent',
    name: 'Sent',
    totalCount: 0,
    type: 'system_label',
    unreadCount: 0
  },
  {
    id: 'drafts',
    name: 'Drafts',
    totalCount: 0,
    type: 'system_label',
    unreadCount: 0
  },
  {
    id: 'trash',
    name: 'Trash',
    totalCount: 1,
    type: 'system_label',
    unreadCount: 0
  },
  {
    id: 'spam',
    name: 'Spam',
    totalCount: 1,
    type: 'system_label',
    unreadCount: 1
  },
  {
    id: 'important',
    name: 'Important',
    totalCount: 1,
    type: 'system_label',
    unreadCount: 0
  },
  {
    id: 'starred',
    name: 'Starred',
    totalCount: 1,
    type: 'system_label',
    unreadCount: 1
  },
  {
    id: '5e892628d4bc60b4514d5d36',
    color: '#43a048',
    name: 'Work',
    totalCount: 1,
    type: 'custom_label',
    unreadCount: 1
  },
  {
    id: '5e8926820cf9ec6c834114ec',
    color: '#1e88e5',
    name: 'Business',
    totalCount: 2,
    type: 'custom_label',
    unreadCount: 0
  },
  {
    id: '5e892696db60f561c43c6f81',
    color: '#fb8a00',
    name: 'Personal',
    totalCount: 1,
    type: 'custom_label',
    unreadCount: 0
  }
];

const emails = [
  {
    id: '5e86bcc3e1b53b6365d71638',
    folder: 'Business',
    isImportant: true,
    isStarred: false,
    isUnread: true,
    labelIds: ['5e8926820cf9ec6c834114ec', '5e892696db60f561c43c6f81'],
    subject: 'Website redesign. Interested in collaboration',
    message: `
Hi Matt, I saw your work on instagram and would be interested in getting a quote for Logo and slider

Integer velit massa, pharetra sed lacus eu, pulvinar faucibus ex. Ut pretium ex id turpis elementum, aliquam accumsan enim sollicitudin. Sed nec consectetur lorem, ac ullamcorper augue. Suspendisse tempus ligula suscipit finibus vehicula. Morbi viverra finibus lectus, egestas dictum mi mollis nec. Proin eget vehicula eros, sit amet molestie ipsum. Morbi feugiat, elit non placerat fringilla, leo risus tristique felis, sollicitudin tristique nibh arcu nec arcu. Maecenas vel turpis nibh. Etiam in lectus quis felis facilisis dictum. Morbi id vehicula lectus, vel imperdiet dolor. Phasellus consequat tempor tellus, quis placerat quam posuere eget. Mauris blandit, nisl eu sollicitudin tincidunt, tellus diam accumsan arcu, vel pharetra lectus est nec nisi. In sem dolor, mollis sed risus eu, mattis dictum lectus. Suspendisse urna est, finibus et urna non, tincidunt placerat eros.

Donec viverra ipsum id auctor rutrum. Morbi consequat a nunc non interdum. Nulla accumsan eget felis a dictum. Cras rhoncus tortor eget velit fringilla suscipit. Donec quis arcu eu nibh aliquet auctor eget fringilla felis. Sed commodo efficitur massa. Proin maximus elit in suscipit laoreet. Integer pretium arcu ac mauris ullamcorper auctor. Vivamus tincidunt lacus eget purus feugiat tincidunt. Etiam feugiat gravida ullamcorper. Pellentesque cursus vehicula lectus et consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam ligula risus, congue eu pellentesque id, volutpat aliquam arcu. Donec efficitur ipsum id neque rhoncus viverra. Vestibulum hendrerit et eros eu bibendum.


Kind regards,

Marcus Finn
    `,
    from: {
      avatar: '/static/mock-images/avatars/avatar-marcus_finn.png',
      email: 'marcus.finn@devias.io',
      name: 'Marcus Finn'
    },
    to: [
      {
        avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
        email: 'jane.rotanson@devias.io',
        name: 'Jane Rotanson'
      }
    ],
    createdAt: now.getTime()
  },
  {
    id: '5e86bcbd8406cd3055f2b6c8',
    folder: 'spam',
    isImportant: false,
    isStarred: true,
    isUnread: false,
    labelIds: [],
    subject: 'Amazing work',
    message: `
Hey, nice projects! I really liked the one in react. What's your quote on kinda similar project?
    `,
    from: {
      avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
      email: 'miron.vitold@devias.io',
      name: 'Miron Vitold'
    },
    to: [
      {
        avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
        email: 'jane.rotanson@devias.io',
        name: 'Jane Rotanson'
      }
    ],
    createdAt: now.getTime()
  },
  {
    id: '5e86bcb9fee1ec12453fa13b',
    folder: 'inbox',
    isImportant: false,
    isStarred: false,
    isUnread: false,
    labelIds: ['5e892628d4bc60b4514d5d36'],
    subject: 'Flight reminder',
    message: `
Dear Jane, Your flight is coming up soon. Please don’t forget to check in for your scheduled flight.
    `,
    from: {
      avatar: '/static/mock-images/avatars/avatar-penjani_inyene.png',
      email: 'penjani.inyene@devias.io',
      name: 'Penjani Inyene'
    },
    to: [
      {
        avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
        email: 'jane.rotanson@devias.io',
        name: 'Jane Rotanson'
      }
    ],
    createdAt: now.getTime()
  },
  {
    id: '5e86bcb5575181a5e527e24f',
    folder: 'trash',
    isImportant: false,
    isStarred: false,
    isUnread: true,
    labelIds: ['5e8926820cf9ec6c834114ec'],
    subject: 'Possible candidates for the position',
    message: `
My market leading client has another fantastic opportunity for an experienced Software Developer to join them on a heavily remote basis
    `,
    from: {
      avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
      email: 'carson.darrin@devias.io',
      name: 'Carson Darrin'
    },
    to: [
      {
        avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
        email: 'jane.rotanson@devias.io',
        name: 'Jane Rotanson'
      }
    ],
    createdAt: now.getTime()
  }
];

class MailApi {
  getLabels() {
    return Promise.resolve(deepCopy(labels));
  }

  getEmails({ systemLabel, customLabel }) {
    return new Promise((resolve, reject) => {
      try {
        // Initially we make a copy of all emails.
        // On a real server this will be different since there will be a real DB query.
        let filteredEmails = [...emails];

        // If custom label is provided filter by it
        if (customLabel) {
          const label = labels.find((_label) => _label.name === customLabel);

          if (!label) {
            // If label does not exist, we simply return an empty array
            // because we need an ID to look for references
            filteredEmails = [];
          } else {
            // If label exists, then filter the emails by the labelId
            filteredEmails = filteredEmails.filter((mail) => mail.labelIds.includes(label.id));
          }
        }

        switch (systemLabel) {
          case 'drafts':
          case 'inbox':
          case 'sent':
          case 'spam':
          case 'trash':
            filteredEmails = filteredEmails.filter((mail) => mail.folder === systemLabel);
            break;
          case 'starred':
            filteredEmails = filteredEmails.filter((mail) => mail.isStarred);
            break;
          case 'important':
            filteredEmails = filteredEmails.filter((mail) => mail.isImportant);
            break;
          default:
            break;
        }

        resolve(deepCopy(filteredEmails));
      } catch (err) {
        console.error('[Mail Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  getEmail(emailId) {
    return new Promise((resolve, reject) => {
      try {
        // Find the mail
        const email = emails.find((_mail) => _mail.id === emailId);

        if (!email) {
          reject(new Error('Email not found'));
          return;
        }

        resolve(deepCopy(email));
      } catch (err) {
        console.error('[Mail Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const mailApi = new MailApi();
