using System;

namespace HospitalManagementSystem
{
    // ===== Delegates =====
    delegate double BillingStrategy(double baseAmount);

    // ===== Class & Objects =====
    abstract class Patient
    {
        public int Id { get; }
        public string Name { get; }
        public double TreatmentCost { get; protected set; }

        protected Patient(int id, string name)
        {
            Id = id;
            Name = name;
        }

        // ===== OOP Concepts (Polymorphism) =====
        public abstract void CalculateBill();
    }

    // ===== OOP Concepts (Inheritance) =====
    class GeneralPatient : Patient
    {
        public GeneralPatient(int id, string name) : base(id, name) { }

        public override void CalculateBill()
        {
            TreatmentCost = 2000;
        }
    }

    // ===== OOP Concepts (Inheritance) =====
    class EmergencyPatient : Patient
    {
        public EmergencyPatient(int id, string name) : base(id, name) { }

        public override void CalculateBill()
        {
            TreatmentCost = 5000;
        }
    }

    // ===== Delegates =====
    class BillingService
    {
        public double ApplyStrategy(double amount, BillingStrategy strategy)
        {
            return strategy(amount);
        }
    }

    // ===== Event Delegate =====
    class HospitalNotifier
    {
        public event Action<string> NotifyDepartments;

        public void TriggerNotification(string message)
        {
            NotifyDepartments?.Invoke(message);
        }
    }

    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hospital Patient Management System\n");

            Console.Write("Enter Patient ID: ");
            int id = int.Parse(Console.ReadLine());

            Console.Write("Enter Patient Name: ");
            string name = Console.ReadLine();

            Console.WriteLine("Select Patient Type:");
            Console.WriteLine("1. General");
            Console.WriteLine("2. Emergency");

            int choice = int.Parse(Console.ReadLine());

            // ===== Class & Objects + Polymorphism =====
            Patient patient;

            if (choice == 1)
                patient = new GeneralPatient(id, name);
            else
                patient = new EmergencyPatient(id, name);

            patient.CalculateBill();

            // ===== Delegates =====
            BillingStrategy insuranceDiscount = amount => amount * 0.8;
            BillingStrategy noDiscount = amount => amount;

            BillingService billingService = new BillingService();

            double finalBill = choice == 1
                ? billingService.ApplyStrategy(patient.TreatmentCost, noDiscount)
                : billingService.ApplyStrategy(patient.TreatmentCost, insuranceDiscount);

            // ===== Event Delegate (Publisher–Subscriber) =====
            HospitalNotifier notifier = new HospitalNotifier();

            notifier.NotifyDepartments += msg => Console.WriteLine("Billing Dept: " + msg);
            notifier.NotifyDepartments += msg => Console.WriteLine("Pharmacy Dept: " + msg);
            notifier.NotifyDepartments += msg => Console.WriteLine("Admin Dept: " + msg);

            Console.WriteLine("\n--- BILL DETAILS ---");
            Console.WriteLine($"Patient Name: {patient.Name}");
            Console.WriteLine($"Final Bill: ₹{finalBill}");

            notifier.TriggerNotification("Patient admitted and bill generated");

            Console.ReadLine();
        }
    }
}
