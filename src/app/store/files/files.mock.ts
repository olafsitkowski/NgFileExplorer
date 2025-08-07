import { Folder } from '../../models/folder.model';
import { userTypeEnum } from '../../models/user.model';

export const initialMockStructure: Folder[] = [
  {
    id: 'folder1',
    name: 'user1',
    ownerId: 2,
    owner: 'user1',
    files: [
      {
        id: 'file1',
        name: 'invoice',
        extension: 'pdf',
        owner: 'user1',
        ownerId: 2,
      },
      {
        id: 'file2',
        name: 'contract',
        extension: 'docx',
        owner: 'user1',
        ownerId: 2,
      },
    ],
    subfolders: [
      {
        id: 'folder2',
        name: 'Photos',
        ownerId: 2,
        owner: 'user1',
        files: [
          {
            id: 'file3',
            name: 'vacation',
            extension: 'jpg',
            owner: 'user1',
            ownerId: 2,
          },
        ],
        subfolders: [],
      },
    ],
  },
  {
    id: 'folder3',
    name: 'user2',
    ownerId: 3,
    owner: 'user2',
    files: [
      {
        id: 'file4',
        name: 'specification',
        extension: 'pdf',
        owner: 'user2',
        ownerId: 3,
      },
      {
        id: 'file5',
        name: 'plan',
        extension: 'xlsx',
        owner: 'user2',
        ownerId: 3,
      },
    ],
    subfolders: [
      {
        id: 'folder4',
        name: 'Materials',
        ownerId: 3,
        owner: 'user2',
        files: [
          {
            id: 'file6',
            name: 'picture',
            extension: 'png',
            owner: 'user2',
            ownerId: 3,
          },
        ],
        subfolders: [],
      },
    ],
  },
  {
    id: 'folder5',
    name: userTypeEnum.ADMIN,
    ownerId: 1,
    owner: userTypeEnum.ADMIN,
    files: [
      {
        id: 'file7',
        name: 'regulations',
        extension: 'docx',
        owner: userTypeEnum.ADMIN,
        ownerId: 1,
      },
      {
        id: 'file8',
        name: 'backup',
        extension: 'zip',
        owner: userTypeEnum.ADMIN,
        ownerId: 1,
      },
    ],
    subfolders: [
      {
        id: 'folder6',
        name: 'Logs',
        owner: userTypeEnum.ADMIN,
        ownerId: 1,
        files: [
          {
            id: 'file9',
            name: 'log_2025',
            extension: 'txt',
            owner: userTypeEnum.ADMIN,
            ownerId: 1,
          },
        ],
        subfolders: [],
      },
    ],
  },
];
