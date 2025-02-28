### **Steps to Update Database Schema Using EF Core**

1.  **Modify the Model**

    -   Update your entity class (`User.cs`).
2.  **Add a New Migration**

    ```bash
    dotnet ef migrations add UpdateUserSchema
    ```

3.  **Apply the Migration to the Database**

    ```bash
    dotnet ef database update
    ```

4.  **Verify Schema Changes**

    -   Check your database to confirm updates.
5.  **Run the Application**

    ```bash
    dotnet run
    ```
