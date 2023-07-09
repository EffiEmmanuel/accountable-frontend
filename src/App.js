import React from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import ProtectedRoute from "./components/security/ProtectedRoute";
import DashboardOverview from "./pages/dashboard/HomePage";
import TransactionsPage from "./pages/dashboard/TransactionsPage";
import UploadCenterPage from "./pages/dashboard/UploadCenterPage";
import SalesPage from "./pages/dashboard/sales/ProfitAndLossPage";
import PurchasesPage from "./pages/dashboard/PurchasesPage";
import ReportsPage from "./pages/dashboard/ReportsPage";
import CustomersPage from "./pages/dashboard/CustomersPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import ProfitAndLossPage from "./pages/dashboard/sales/ProfitAndLossPage";
import BalanceSheetPage from "./pages/dashboard/sales/BalanceSheetPage";
import UploadInvoicesPage from "./pages/dashboard/upload-center/UploadInvoicesPage";
import UploadCustomersPage from "./pages/dashboard/upload-center/UploadCustomersPage";
import UploadContactsPage from "./pages/dashboard/upload-center/UploadContactsPage";
import UploadSuppliersPage from "./pages/dashboard/upload-center/UploadSuppliersPage";
import UploadQuotationsPage from "./pages/dashboard/upload-center/UploadQuotationsPage";
import UploadExpensesPage from "./pages/dashboard/upload-center/UploadExpensesPage";
import UploadProductsPage from "./pages/dashboard/upload-center/UploadProductsPage";
import UploadReceiptsPage from "./pages/dashboard/upload-center/UploadReceiptsPage";
import UploadNewExpensesPage from "./pages/dashboard/upload-center/UploadExpensesPage/UploadNewExpensePage";

function App() {
  return (
    <>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<LoginPage />} />

        {/* Auth pages */}
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
        </Route>

        {/* Dashboard routes */}
        <Route path="/dashboard">
          <Route
            path=""
            element={
              <ProtectedRoute>
                <DashboardOverview />
              </ProtectedRoute>
            }
          />

          <Route
            path="transactions"
            element={
              <ProtectedRoute>
                <TransactionsPage />
              </ProtectedRoute>
            }
          />

          {/* UPLOAD CENTER ROUTES */}
          <Route
            path="upload-center/invoices"
            element={
              <ProtectedRoute>
                <UploadInvoicesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="upload-center/customers"
            element={
              <ProtectedRoute>
                <UploadCustomersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="upload-center/contacts"
            element={
              <ProtectedRoute>
                <UploadContactsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="upload-center/suppliers"
            element={
              <ProtectedRoute>
                <UploadSuppliersPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="upload-center/quotations"
            element={
              <ProtectedRoute>
                <UploadQuotationsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="upload-center/expenses"
            element={
              <ProtectedRoute>
                <UploadExpensesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="upload-center/expenses/upload-expense"
            element={
              <ProtectedRoute>
                <UploadNewExpensesPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="upload-center/products"
            element={
              <ProtectedRoute>
                <UploadProductsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="upload-center/receipts"
            element={
              <ProtectedRoute>
                <UploadReceiptsPage />
              </ProtectedRoute>
            }
          />

          {/* SALES ROUTES */}
          <Route
            path="sales/profit-and-loss"
            element={
              <ProtectedRoute>
                <ProfitAndLossPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="sales/balance-sheet"
            element={
              <ProtectedRoute>
                <BalanceSheetPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="purchases"
            element={
              <ProtectedRoute>
                <PurchasesPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="reports"
            element={
              <ProtectedRoute>
                <ReportsPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="customers"
            element={
              <ProtectedRoute>
                <CustomersPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="settings"
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
