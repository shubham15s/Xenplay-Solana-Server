export type CreateEvent = {
  version: "0.1.0";
  name: "event_outcome";
  address: "ATv39cBBMt5CaBd6TyumUXeWmR9hJDtDVbtpLGV75pcR";
  metadata: {
    name: "event_outcome";
    version: "0.1.0";
    spec: "0.1.0";
    address: "ATv39cBBMt5CaBd6TyumUXeWmR9hJDtDVbtpLGV75pcR";
  };
  instructions: [
    {
      name: "createEvent";
      accounts: [
        {
          name: "event";
          isMut: true;
          isSigner: true;
        },
        {
          name: "creator";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "title";
          type: "string";
        },
        {
          name: "outcomes";
          type: {
            vec: "string";
          };
        }
      ];
    },
    {
      name: "updateEvent";
      accounts: [
        {
          name: "event";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "isActive";
          type: "bool";
        }
      ];
    },
    {
      name: "closeEvent";
      accounts: [
        {
          name: "event";
          isMut: true;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "outcome";
          type: "string";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "Event";
      type: {
        kind: "struct";
        fields: [
          {
            name: "creator";
            type: "publicKey";
          },
          {
            name: "title";
            type: "string";
          },
          {
            name: "outcomes";
            type: {
              vec: "string";
            };
          },
          {
            name: "isActive";
            type: "bool";
          },
          {
            name: "outcome";
            type: {
              option: "string";
            };
          }
        ];
      };
    }
  ];
  errors: [
    {
      code: 6000;
      name: "EmptyTitle";
      msg: "Event title cannot be empty";
    },
    {
      code: 6001;
      name: "EmptyOutcomes";
      msg: "Event outcomes cannot be empty";
    },
    {
      code: 6002;
      name: "EventInactive";
      msg: "Event is not active";
    },
    {
      code: 6003;
      name: "InvalidOutcome";
      msg: "Invalid outcome specified";
    }
  ];
};

export const IDL: CreateEvent = {
  version: "0.1.0",
  name: "event_outcome",
  address: "ATv39cBBMt5CaBd6TyumUXeWmR9hJDtDVbtpLGV75pcR",
  metadata: {
    name: "event_outcome",
    version: "0.1.0",
    spec: "0.1.0",
    address: "ATv39cBBMt5CaBd6TyumUXeWmR9hJDtDVbtpLGV75pcR",
  },
  instructions: [
    {
      name: "createEvent",
      accounts: [
        {
          name: "event",
          isMut: true,
          isSigner: true,
        },
        {
          name: "creator",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "title",
          type: "string",
        },
        {
          name: "outcomes",
          type: {
            vec: "string",
          },
        },
      ],
    },
    {
      name: "updateEvent",
      accounts: [
        {
          name: "event",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "isActive",
          type: "bool",
        },
      ],
    },
    {
      name: "closeEvent",
      accounts: [
        {
          name: "event",
          isMut: true,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "outcome",
          type: "string",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "Event",
      type: {
        kind: "struct",
        fields: [
          {
            name: "creator",
            type: "publicKey",
          },
          {
            name: "title",
            type: "string",
          },
          {
            name: "outcomes",
            type: {
              vec: "string",
            },
          },
          {
            name: "isActive",
            type: "bool",
          },
          {
            name: "outcome",
            type: {
              option: "string",
            },
          },
        ],
      },
    },
  ],
  errors: [
    {
      code: 6000,
      name: "EmptyTitle",
      msg: "Event title cannot be empty",
    },
    {
      code: 6001,
      name: "EmptyOutcomes",
      msg: "Event outcomes cannot be empty",
    },
    {
      code: 6002,
      name: "EventInactive",
      msg: "Event is not active",
    },
    {
      code: 6003,
      name: "InvalidOutcome",
      msg: "Invalid outcome specified",
    },
  ],
};
