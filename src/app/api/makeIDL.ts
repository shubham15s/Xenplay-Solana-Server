export type CreateEvent = {
  version: "0.1.0";
  name: "prediction_submission";
  address: "2cVYKpawjRdgdbuswhBZHroWqmV4YtStxCriJfbP9BkC";
  metadata: {
    name: "prediction_submission";
    version: "0.1.0";
    spec: "0.1.0";
    address: "2cVYKpawjRdgdbuswhBZHroWqmV4YtStxCriJfbP9BkC";
  };
  instructions: [
    {
      name: "submitPrediction";
      accounts: [
        {
          name: "prediction";
          isMut: true;
          isSigner: false;
        },
        {
          name: "user";
          isMut: true;
          isSigner: true;
        },
        {
          name: "escrowAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "predictedUserAccount";
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
          name: "id";
          type: "u64";
        },
        {
          name: "eventId";
          type: "publicKey";
        },
        {
          name: "predictionChoice";
          type: "string";
        },
        {
          name: "amount";
          type: "u64";
        }
      ];
    }
  ];
  accounts: [
    {
      name: "Prediction";
      type: {
        kind: "struct";
        fields: [
          {
            name: "user";
            type: "publicKey";
          },
          {
            name: "id";
            type: "u64";
          },
          {
            name: "event";
            type: "publicKey";
          },
          {
            name: "predictionChoice";
            type: "string";
          },
          {
            name: "amount";
            type: "u64";
          }
        ];
      };
    },
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
      name: "PredictionTooLong";
      msg: "Prediction is too long";
    }
  ];
};

export const IDL: CreateEvent = {
  version: "0.1.0",
  name: "prediction_submission",
  address: "2cVYKpawjRdgdbuswhBZHroWqmV4YtStxCriJfbP9BkC",
  metadata: {
    name: "prediction_submission",
    version: "0.1.0",
    spec: "0.1.0",
    address: "2cVYKpawjRdgdbuswhBZHroWqmV4YtStxCriJfbP9BkC",
  },
  instructions: [
    {
      name: "submitPrediction",
      accounts: [
        {
          name: "prediction",
          isMut: true,
          isSigner: false,
        },
        {
          name: "user",
          isMut: true,
          isSigner: true,
        },
        {
          name: "escrowAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "predictedUserAccount",
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
          name: "id",
          type: "u64",
        },
        {
          name: "eventId",
          type: "publicKey",
        },
        {
          name: "predictionChoice",
          type: "string",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "Prediction",
      type: {
        kind: "struct",
        fields: [
          {
            name: "user",
            type: "publicKey",
          },
          {
            name: "id",
            type: "u64",
          },
          {
            name: "event",
            type: "publicKey",
          },
          {
            name: "predictionChoice",
            type: "string",
          },
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    },
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
      name: "PredictionTooLong",
      msg: "Prediction is too long",
    },
  ],
};
