-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "reset_password_token" TEXT,
    "jwt_token" TEXT,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL,
    "current_balance" INTEGER NOT NULL,
    "total_expenses" INTEGER NOT NULL,
    "total_food" INTEGER NOT NULL,
    "total_subscriptions" INTEGER NOT NULL,
    "total_shop" INTEGER NOT NULL,
    "total_entertainment" INTEGER NOT NULL,
    "total_transport" INTEGER NOT NULL,
    "total_house" INTEGER NOT NULL,
    "investments_total" INTEGER NOT NULL,
    "investments_fixed_income" INTEGER NOT NULL,
    "investments_variable_income" INTEGER NOT NULL,
    "investments_criptocurrencies" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "account_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
