import { subDays, subHours, subMinutes } from 'date-fns';
import createResourceId from '../utils/createResourceId';
import deepCopy from '../utils/deepCopy';

const now = new Date();

const contacts = [
  {
    id: '5e8891ab188cd2855e6029b7',
    avatar: '/static/mock-images/avatars/avatar-alcides_antonio.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Alcides Antonio',
    username: 'alcides.antonio'
  },
  {
    id: '5e887a62195cc5aef7e8ca5d',
    avatar: '/static/mock-images/avatars/avatar-marcus_finn.png',
    isActive: false,
    lastActivity: subHours(now, 2).getTime(),
    name: 'Marcus Finn',
    username: 'marcus.finn'
  },
  {
    id: '5e887ac47eed253091be10cb',
    avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
    isActive: false,
    lastActivity: subMinutes(now, 15).getTime(),
    name: 'Carson Darrin',
    username: 'carson.darrin'
  },
  {
    id: '5e887b209c28ac3dd97f6db5',
    avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Fran Perez',
    username: 'fran.perez'
  },
  {
    id: '5e887b7602bdbc4dbb234b27',
    avatar: '/static/mock-images/avatars/avatar-jie_yan_song.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Jie Yan Song',
    username: 'jie.yan.song'
  },
  {
    id: '5e86805e2bafd54f66cc95c3',
    avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
    isActive: false,
    lastActivity: subDays(now, 2).getTime(),
    name: 'Miron Vitold',
    username: 'miron.vitold'
  },
  {
    id: '5e887a1fbefd7938eea9c981',
    avatar: '/static/mock-images/avatars/avatar-penjani_inyene.png',
    isActive: false,
    lastActivity: subHours(now, 6).getTime(),
    name: 'Penjani Inyene',
    username: 'penjani.inyene'
  },
  {
    id: '5e887d0b3d090c1b8f162003',
    avatar: '/static/mock-images/avatars/avatar-omar_darobe.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Omar Darobe',
    username: 'omar.darobe'
  },
  {
    id: '5e88792be2d4cfb4bf0971d9',
    avatar: '/static/mock-images/avatars/avatar-siegbert_gottfried.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Siegbert Gottfried',
    username: 'siegbert.gottfried'
  },
  {
    id: '5e8877da9a65442b11551975',
    avatar: '/static/mock-images/avatars/avatar-iulia_albu.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Iulia Albu',
    username: 'iulia.albu'
  },
  {
    id: '5e8680e60cba5019c5ca6fda',
    avatar: '/static/mock-images/avatars/avatar-nasimiyu_danai.png',
    isActive: true,
    lastActivity: now.getTime(),
    name: 'Nasimiyu Danai',
    username: 'nasimiyu.danai'
  }
];

const threads = [
  {
    id: '5e867eb9de721aecaccf4f7b',
    messages: [
      {
        id: '5e867f0a5bc0ff2bfa07bfa6',
        attachments: [],
        body: 'Hey, nice projects! I really liked the one in react. What\'s your quote on kinda similar project?',
        contentType: 'text',
        createdAt: subHours(now, 10).getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      },
      {
        id: '5e867f167d5f78109ae9f2a4',
        attachments: [],
        body: 'I would need to know more details, but my hourly rate stats at $35/hour. Thanks!',
        contentType: 'text',
        createdAt: subHours(now, 2).getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
      {
        id: '5e867f1c9ca72084693528f4',
        attachments: [],
        body: 'Well it\'s a really easy one, I\'m sure we can make it half of the price.',
        contentType: 'text',
        createdAt: subMinutes(now, 5).getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      },
      {
        id: '5e867f22fd2e27a09849b4db',
        attachments: [],
        body: 'Then why don\'t you make it if it\'s that easy? Sorry I\'m not interetes, have fantastic day Adam!',
        contentType: 'text',
        createdAt: subMinutes(now, 3).getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
      {
        id: '5e867f28a34d45ac6eb5c41f',
        attachments: [],
        body: 'Last offer, $25 per hour',
        contentType: 'text',
        createdAt: subMinutes(now, 1).getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      },
      {
        id: '5e867f2dba984a3f78b33526',
        attachments: [],
        body: '/static/mock-images/projects/project_4.png',
        contentType: 'image',
        createdAt: subMinutes(now, 1).getTime(),
        senderId: '5e86805e2bafd54f66cc95c3'
      }
    ],
    participants: [
      {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
        name: 'Jane Rotanson',
        username: 'jane.rotanson'
      },
      {
        id: '5e86805e2bafd54f66cc95c3',
        avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
        name: 'Miron Vitold',
        username: 'miron.vitold'
      }
    ],
    type: 'ONE_TO_ONE',
    unreadCount: 2
  },
  {
    id: '5e867fa7082c3c5921403a26',
    messages: [
      {
        id: '5e867fc180837d901bd9bca1',
        attachments: [],
        body: 'Hey, would you like to collaborate?',
        contentType: 'text',
        createdAt: subMinutes(now, 6).getTime(),
        senderId: '5e8680e60cba5019c5ca6fda'
      },
      {
        id: '5e8d6fb695df7971237fc173',
        attachments: [],
        body: 'Hi, Merrile!',
        contentType: 'text',
        createdAt: subMinutes(now, 5).getTime(),
        senderId: '5e86809283e28b96d2d38537'
      },
      {
        id: '58825a290eb4d4271a54f188',
        attachments: [],
        body: 'Hello everyone 😀',
        contentType: 'text',
        createdAt: subMinutes(now, 2).getTime(),
        senderId: '5e8891ab188cd2855e6029b7'
      }
    ],
    participants: [
      {
        id: '5e86809283e28b96d2d38537',
        avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
        name: 'Jane Rotanson',
        username: 'jane.rotanson'
      },
      {
        id: '5e8680e60cba5019c5ca6fda',
        avatar: '/static/mock-images/avatars/avatar-nasimiyu_danai.png',
        name: 'Nasimiyu Danai',
        username: 'nasimiyu.danai'
      },
      {
        id: '5e8891ab188cd2855e6029b7',
        avatar: '/static/mock-images/avatars/avatar-alcides_antonio.png',
        name: 'Alcides Antonio',
        username: 'alcides.antonio'
      }
    ],
    type: 'GROUP',
    unreadCount: 0
  }
];

const findContactByUsername = (username) => {
  const contact = contacts.find((_contact) => _contact.username === username);

  return contact || null;
};

const findThreadById = (threadId) => {
  const thread = threads.find((_threadId) => _threadId.id === threadId);

  return thread || null;
};

// This means that we are looking for ONE_TO_ONE thread
const findThreadByOtherParticipantId = (participantId) => {
  const thread = threads.find((_thread) => {
    if (_thread.type !== 'ONE_TO_ONE') {
      return false;
    }

    const participant = _thread.participants.find((_participant) => (_participant.id
      === participantId));

    return !!participant;
  });

  return thread || null;
};

const findThreadByParticipantIds = (participantIds) => {
  const thread = threads.find((_thread) => {
    if (_thread.participants.length < participantIds.length) {
      return false;
    }

    const foundParticipantIds = new Set();

    thread.participants.forEach((participant) => {
      foundParticipantIds.add(participant.id);
    });

    return foundParticipantIds.size === participantIds.length;
  });

  return thread || null;
};

class ChatApi {
  getContacts() {
    return Promise.resolve(deepCopy(contacts));
  }

  searchContacts(query) {
    return new Promise((resolve, reject) => {
      try {
        let foundContacts = contacts;

        if (query) {
          const cleanQuery = query.toLowerCase().trim();
          foundContacts = foundContacts.filter((contact) => (contact.name.toLowerCase().includes(cleanQuery)));
        }

        resolve(deepCopy(foundContacts));
      } catch (err) {
        console.error('[Chat Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  getParticipants(threadKey) {
    return new Promise((resolve, reject) => {
      try {
        const participants = [];

        // Thread key might be an ID if thread type is GROUP
        // otherwise it represents an username
        const thread = findThreadById(threadKey);

        if (thread) {
          participants.push(...thread.participants);
        } else {
          const contact = findContactByUsername(threadKey);

          if (contact) {
            participants.push({
              id: contact.id,
              avatar: contact.avatar,
              name: contact.name,
              username: contact.username
            });
          }
        }

        resolve(deepCopy(participants));
      } catch (err) {
        console.error('[Chat Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  getThreads() {
    return Promise.resolve(deepCopy(threads));
  }

  getThread(threadKey) {
    return new Promise((resolve, reject) => {
      try {
        // Thread key might be an ID if thread type is GROUP
        // otherwise it represents an username
        let thread = findThreadById(threadKey);

        if (thread) {
          resolve(deepCopy(thread));
          return;
        }

        // At this point, thread key should represent an existing contact
        // If no contact found, the user is trying a shady route
        // If contact exists, user might want to start a new conversation
        const contact = findContactByUsername(threadKey);

        if (!contact) {
          reject(new Error('Unable to find the contact'));
          return;
        }

        // This could return a null if no thread found
        thread = findThreadByOtherParticipantId(contact.id);

        resolve(deepCopy(thread));
      } catch (err) {
        console.error('[Chat Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  markThreadAsSeen(threadId) {
    return new Promise((resolve, reject) => {
      try {
        const thread = threads.find((_thread) => _thread.id === threadId);

        if (thread) {
          thread.unreadCount = 0;
        }

        resolve(true);
      } catch (err) {
        console.error('[Chat Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }

  addMessage({ threadId, recipientIds, body }) {
    // Adding a new message to a thread can by done in 3 ways
    // 1) By specifying a thread id, this means that the thread already exists
    // 2) By specifying the other user id (if ONE_TO_ONE thread), thread might exist
    // 3) By specifying a list of recipients, thread might already exist

    return new Promise((resolve, reject) => {
      try {
        // On server get current identity (user) from the request
        const user = {
          id: '5e86809283e28b96d2d38537',
          avatar: '/static/mock-images/avatars/avatar-jane_rotanson.png',
          name: 'Jane Rotanson',
          username: 'jane.rotanson'
        };

        let thread = null;

        // Try to find the thread by threadId if provided
        if (threadId) {
          thread = findThreadById(threadId);

          if (!thread) {
            reject(new Error('Invalid thread id'));
            return;
          }
        }

        // Try to find the thread by recipientIds is provided
        if (recipientIds) {
          const participantIds = [...recipientIds, user.id];

          thread = findThreadByParticipantIds(participantIds);
        }

        const message = {
          id: createResourceId(),
          attachments: [],
          body,
          contentType: 'text',
          createdAt: now.getTime(),
          senderId: user.id
        };

        // If thread exists, add the message
        if (thread) {
          thread.messages.push(message);
        } else {
          // If it does not, it means that we have to create a new thread
          const participants = [user];

          recipientIds.forEach((recipientId) => {
            const contact = contacts.find((_contact) => _contact.id === recipientId);

            // This should not naturally occur
            if (!contact) {
              throw new Error('Contact not found');
            }

            participants.push({
              id: contact.id,
              avatar: contact.avatar,
              name: contact.name,
              username: contact.username
            });
          });

          thread = {
            id: createResourceId(),
            messages: [message],
            participants,
            type: participants.length === 2 ? 'ONE_TO_ONE' : 'GROUP',
            unreadCount: 0
          };
        }

        resolve({
          threadId: thread.id,
          message
        });
      } catch (err) {
        console.error('[Chat Api]: ', err);
        reject(new Error('Internal server error'));
      }
    });
  }
}

export const chatApi = new ChatApi();
