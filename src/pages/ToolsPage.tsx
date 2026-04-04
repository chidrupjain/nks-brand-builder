import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BarChart3, TrendingUp, Target, Landmark, ArrowUpRight,
  Shield, GraduationCap, Home, Calculator, ChevronRight,
} from "lucide-react";
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Area, AreaChart, Legend,
} from "recharts";

function formatCurrency(val: number): string {
  if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`;
  if (val >= 100000) return `₹${(val / 100000).toFixed(2)} L`;
  if (val >= 1000) return `₹${(val / 1000).toFixed(1)}K`;
  return `₹${val.toFixed(0)}`;
}

function Slider({ label, value, onChange, min, max, step = 1, prefix = "", suffix = "", sublabel }: {
  label: string; value: number; onChange: (v: number) => void;
  min: number; max: number; step?: number; prefix?: string; suffix?: string; sublabel?: string;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <span className="font-sans text-sm text-navy-700">{label}{sublabel && <span className="text-xs text-muted-foreground ml-1">({sublabel})</span>}</span>
        <span className="font-mono text-sm font-bold text-navy-800">{prefix}{value.toLocaleString("en-IN")}{suffix}</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #C8A94E ${pct}%, #DDE2EE ${pct}%)`,
          }}
        />
      </div>
    </div>
  );
}

function ResultCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-navy-800 rounded-lg p-4 text-center">
      <p className="font-sans text-xs text-gold-400 mb-1">{label}</p>
      <p className="font-mono text-xl font-bold text-white">{value}</p>
      {sub && <p className="font-sans text-[10px] text-white/50 mt-1">{sub}</p>}
    </div>
  );
}

/* ─── SIP CALCULATOR ─── */
function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const data = useMemo(() => {
    const r = rate / 100 / 12;
    return Array.from({ length: years }, (_, i) => {
      const n = (i + 1) * 12;
      const fv = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
      const invested = monthly * n;
      return { year: i + 1, invested, returns: Math.round(fv - invested), total: Math.round(fv) };
    });
  }, [monthly, rate, years]);

  const final = data[data.length - 1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Slider label="Monthly SIP" value={monthly} onChange={setMonthly} min={500} max={200000} step={500} prefix="₹" />
        <Slider label="Expected Return" value={rate} onChange={setRate} min={1} max={12} step={0.5} suffix="% p.a." />
        <Slider label="Investment Period" value={years} onChange={setYears} min={1} max={30} suffix=" years" />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <ResultCard label="Total Invested" value={formatCurrency(final.invested)} />
          <ResultCard label="Estimated Returns" value={formatCurrency(final.returns)} />
          <ResultCard label="Total Corpus" value={formatCurrency(final.total)} />
          <ResultCard label="Wealth Multiple" value={`${(final.total / final.invested).toFixed(1)}x`} />
        </div>
      </div>
      <div className="bg-white border border-border rounded-xl p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8EDF8" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={(v) => formatCurrency(v)} tick={{ fontSize: 11 }} />
            <Tooltip formatter={(v: number) => formatCurrency(v)} />
            <Legend />
            <Bar dataKey="invested" name="Invested" fill="#0B1F4A" radius={[2, 2, 0, 0]} />
            <Bar dataKey="returns" name="Returns" fill="#C8A94E" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ─── LUMPSUM CALCULATOR ─── */
function LumpsumCalculator() {
  const [amount, setAmount] = useState(100000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const data = useMemo(() => {
    return Array.from({ length: years }, (_, i) => {
      const fv = amount * Math.pow(1 + rate / 100, i + 1);
      return { year: i + 1, value: Math.round(fv), invested: amount };
    });
  }, [amount, rate, years]);

  const final = data[data.length - 1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Slider label="Investment Amount" value={amount} onChange={setAmount} min={10000} max={10000000} step={10000} prefix="₹" />
        <Slider label="Expected Return" value={rate} onChange={setRate} min={1} max={12} step={0.5} suffix="% p.a." />
        <Slider label="Investment Period" value={years} onChange={setYears} min={1} max={30} suffix=" years" />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <ResultCard label="Amount Invested" value={formatCurrency(amount)} />
          <ResultCard label="Estimated Value" value={formatCurrency(final.value)} />
          <ResultCard label="Total Gain" value={formatCurrency(final.value - amount)} />
          <ResultCard label="CAGR" value={`${rate}%`} />
        </div>
      </div>
      <div className="bg-white border border-border rounded-xl p-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8EDF8" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={(v) => formatCurrency(v)} tick={{ fontSize: 11 }} />
            <Tooltip formatter={(v: number) => formatCurrency(v)} />
            <Area type="monotone" dataKey="invested" name="Invested" fill="#E8EDF8" stroke="#0B1F4A" />
            <Area type="monotone" dataKey="value" name="Future Value" fill="#F8F2DC" stroke="#C8A94E" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ─── GOAL PLANNING ─── */
function GoalCalculator() {
  const [goal, setGoal] = useState(2500000);
  const [years, setYears] = useState(10);
  const [current, setCurrent] = useState(100000);
  const [rate, setRate] = useState(12);

  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = years * 12;
    const futureOfCurrent = current * Math.pow(1 + rate / 100, years);
    const remaining = Math.max(0, goal - futureOfCurrent);
    const sipRequired = remaining > 0 ? remaining / (((Math.pow(1 + r, n) - 1) / r) * (1 + r)) : 0;
    const lumpsumRequired = remaining > 0 ? remaining / Math.pow(1 + rate / 100, years) : 0;
    return { sipRequired: Math.round(sipRequired), lumpsumRequired: Math.round(lumpsumRequired), futureOfCurrent: Math.round(futureOfCurrent), shortfall: Math.round(remaining) };
  }, [goal, years, current, rate]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Slider label="Target Amount" value={goal} onChange={setGoal} min={100000} max={100000000} step={100000} prefix="₹" />
        <Slider label="Time Horizon" value={years} onChange={setYears} min={1} max={30} suffix=" years" />
        <Slider label="Current Savings" value={current} onChange={setCurrent} min={0} max={10000000} step={10000} prefix="₹" />
        <Slider label="Expected Return" value={rate} onChange={setRate} min={1} max={12} step={0.5} suffix="% p.a." />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <ResultCard label="Required Monthly SIP" value={formatCurrency(result.sipRequired)} />
          <ResultCard label="Or Lumpsum Needed" value={formatCurrency(result.lumpsumRequired)} />
          <ResultCard label="Current Savings Grow To" value={formatCurrency(result.futureOfCurrent)} />
          <ResultCard label="Shortfall" value={formatCurrency(result.shortfall)} />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {[
          { icon: GraduationCap, label: "Education", amount: "₹25L–₹1Cr+" },
          { icon: Landmark, label: "Retirement", amount: "₹2Cr–₹10Cr+" },
          { icon: Home, label: "Home Purchase", amount: "₹30L–₹2Cr+" },
          { icon: Target, label: "Marriage", amount: "₹10L–₹50L+" },
        ].map((g) => (
          <div key={g.label} className="flex items-center gap-4 bg-white border border-border rounded-lg p-4 hover:border-gold-400 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
              <g.icon size={20} className="text-gold-600" />
            </div>
            <div>
              <p className="font-display font-bold text-sm text-navy-800">{g.label}</p>
              <p className="font-mono text-xs text-muted-foreground">Typical target: {g.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── RETIREMENT CALCULATOR ─── */
function RetirementCalculator() {
  const [age, setAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [monthly, setMonthly] = useState(50000);
  const [rate, setRate] = useState(12);
  const [inflation, setInflation] = useState(6);

  const result = useMemo(() => {
    const yearsToRetire = retireAge - age;
    const yearsInRetirement = 25;
    const realReturn = ((1 + rate / 100) / (1 + inflation / 100)) - 1;
    const futureMonthly = monthly * Math.pow(1 + inflation / 100, yearsToRetire);
    const annualExpense = futureMonthly * 12;
    const corpus = annualExpense * ((1 - Math.pow(1 + realReturn, -yearsInRetirement)) / realReturn);
    const r = rate / 100 / 12;
    const n = yearsToRetire * 12;
    const sipRequired = corpus / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    return {
      corpus: Math.round(corpus),
      sipRequired: Math.round(sipRequired),
      futureMonthly: Math.round(futureMonthly),
      yearsToRetire,
    };
  }, [age, retireAge, monthly, rate, inflation]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Slider label="Current Age" value={age} onChange={setAge} min={18} max={55} suffix=" yrs" />
        <Slider label="Retirement Age" value={retireAge} onChange={setRetireAge} min={Math.max(age + 5, 45)} max={70} suffix=" yrs" />
        <Slider label="Monthly Expenses (today)" value={monthly} onChange={setMonthly} min={10000} max={500000} step={5000} prefix="₹" />
        <Slider label="Expected Return" value={rate} onChange={setRate} min={1} max={12} step={0.5} suffix="% p.a." />
        <Slider label="Inflation Rate" value={inflation} onChange={setInflation} min={3} max={10} step={0.5} suffix="% p.a." />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <ResultCard label="Retirement Corpus Needed" value={formatCurrency(result.corpus)} />
          <ResultCard label="Required Monthly SIP" value={formatCurrency(result.sipRequired)} />
          <ResultCard label="Monthly Expense at Retirement" value={formatCurrency(result.futureMonthly)} />
          <ResultCard label="Years to Retirement" value={`${result.yearsToRetire} yrs`} />
        </div>
      </div>
      <div className="bg-white border border-border rounded-xl p-6 flex flex-col justify-center items-center">
        <div className="relative w-48 h-48">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="85" fill="none" stroke="#E8EDF8" strokeWidth="12" />
            <circle
              cx="100" cy="100" r="85"
              fill="none" stroke="#C8A94E" strokeWidth="12"
              strokeDasharray={`${(result.yearsToRetire / (retireAge - 18)) * 534} 534`}
              strokeLinecap="round"
              transform="rotate(-90 100 100)"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-2xl font-bold text-navy-800">{result.yearsToRetire}</span>
            <span className="font-sans text-xs text-muted-foreground">years left</span>
          </div>
        </div>
        <p className="font-sans text-sm text-muted-foreground text-center mt-4">
          Start investing <span className="font-mono font-bold text-navy-800">{formatCurrency(result.sipRequired)}/mo</span> to build your retirement corpus
        </p>
      </div>
    </div>
  );
}

/* ─── STEP-UP SIP ─── */
function StepUpSIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [stepUp, setStepUp] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const data = useMemo(() => {
    let total = 0;
    let invested = 0;
    const r = rate / 100 / 12;
    const result: { year: number; invested: number; total: number; returns: number }[] = [];
    for (let y = 0; y < years; y++) {
      const sip = monthly * Math.pow(1 + stepUp / 100, y);
      for (let m = 0; m < 12; m++) {
        invested += sip;
        total = (total + sip) * (1 + r);
      }
      result.push({ year: y + 1, invested: Math.round(invested), total: Math.round(total), returns: Math.round(total - invested) });
    }
    return result;
  }, [monthly, stepUp, rate, years]);

  const final = data[data.length - 1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Slider label="Starting Monthly SIP" value={monthly} onChange={setMonthly} min={500} max={200000} step={500} prefix="₹" />
        <Slider label="Annual Step-Up" value={stepUp} onChange={setStepUp} min={0} max={25} suffix="%" />
        <Slider label="Expected Return" value={rate} onChange={setRate} min={1} max={12} step={0.5} suffix="% p.a." />
        <Slider label="Investment Period" value={years} onChange={setYears} min={1} max={30} suffix=" years" />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <ResultCard label="Total Invested" value={formatCurrency(final.invested)} />
          <ResultCard label="Estimated Returns" value={formatCurrency(final.returns)} />
          <ResultCard label="Total Corpus" value={formatCurrency(final.total)} />
          <ResultCard label="Wealth Multiple" value={`${(final.total / final.invested).toFixed(1)}x`} />
        </div>
      </div>
      <div className="bg-white border border-border rounded-xl p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8EDF8" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={(v) => formatCurrency(v)} tick={{ fontSize: 11 }} />
            <Tooltip formatter={(v: number) => formatCurrency(v)} />
            <Legend />
            <Bar dataKey="invested" name="Invested" fill="#0B1F4A" radius={[2, 2, 0, 0]} />
            <Bar dataKey="returns" name="Returns" fill="#C8A94E" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ─── LIFE INSURANCE COVERAGE ─── */
function InsuranceCoverageCalculator() {
  const [income, setIncome] = useState(800000);
  const [liabilities, setLiabilities] = useState(1000000);
  const [existing, setExisting] = useState(500000);
  const [dependents, setDependents] = useState(3);

  const result = useMemo(() => {
    const incomeReplacement = income * 10;
    const total = incomeReplacement + liabilities - existing;
    return { incomeReplacement, total: Math.max(0, total) };
  }, [income, liabilities, existing, dependents]);

  return (
    <div>
      <Slider label="Annual Income" value={income} onChange={setIncome} min={200000} max={10000000} step={50000} prefix="₹" />
      <Slider label="Total Liabilities" value={liabilities} onChange={setLiabilities} min={0} max={50000000} step={100000} prefix="₹" />
      <Slider label="Existing Life Cover" value={existing} onChange={setExisting} min={0} max={50000000} step={100000} prefix="₹" />
      <Slider label="Number of Dependents" value={dependents} onChange={setDependents} min={0} max={10} />
      <div className="grid grid-cols-2 gap-3 mt-4">
        <ResultCard label="Income Replacement (10x)" value={formatCurrency(result.incomeReplacement)} />
        <ResultCard label="Recommended Cover" value={formatCurrency(result.total)} sub="After adjusting existing cover" />
      </div>
    </div>
  );
}

/* ─── CHILD EDUCATION ─── */
function ChildEducationCalculator() {
  const [currentCost, setCurrentCost] = useState(1500000);
  const [years, setYears] = useState(15);
  const [inflation, setInflation] = useState(8);
  const [rate, setRate] = useState(12);

  const result = useMemo(() => {
    const futureCost = currentCost * Math.pow(1 + inflation / 100, years);
    const r = rate / 100 / 12;
    const n = years * 12;
    const sipRequired = futureCost / (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    return { futureCost: Math.round(futureCost), sipRequired: Math.round(sipRequired) };
  }, [currentCost, years, inflation, rate]);

  return (
    <div>
      <Slider label="Current Education Cost" value={currentCost} onChange={setCurrentCost} min={100000} max={50000000} step={100000} prefix="₹" />
      <Slider label="Years Until Education" value={years} onChange={setYears} min={1} max={25} suffix=" years" />
      <Slider label="Education Inflation" value={inflation} onChange={setInflation} min={4} max={15} step={0.5} suffix="%" />
      <Slider label="Expected Return" value={rate} onChange={setRate} min={1} max={12} step={0.5} suffix="% p.a." />
      <div className="grid grid-cols-2 gap-3 mt-4">
        <ResultCard label="Future Education Cost" value={formatCurrency(result.futureCost)} />
        <ResultCard label="Required Monthly SIP" value={formatCurrency(result.sipRequired)} />
      </div>
    </div>
  );
}

/* ─── HOME LOAN EMI ─── */
function HomeLoanEMICalculator() {
  const [principal, setPrincipal] = useState(5000000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const result = useMemo(() => {
    const r = rate / 100 / 12;
    const n = tenure * 12;
    const emi = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const totalPayment = emi * n;
    return { emi: Math.round(emi), totalPayment: Math.round(totalPayment), totalInterest: Math.round(totalPayment - principal) };
  }, [principal, rate, tenure]);

  return (
    <div>
      <Slider label="Loan Amount" value={principal} onChange={setPrincipal} min={500000} max={100000000} step={100000} prefix="₹" />
      <Slider label="Interest Rate" value={rate} onChange={setRate} min={5} max={15} step={0.1} suffix="% p.a." />
      <Slider label="Tenure" value={tenure} onChange={setTenure} min={1} max={30} suffix=" years" />
      <div className="grid grid-cols-3 gap-3 mt-4">
        <ResultCard label="Monthly EMI" value={formatCurrency(result.emi)} />
        <ResultCard label="Total Interest" value={formatCurrency(result.totalInterest)} />
        <ResultCard label="Total Payment" value={formatCurrency(result.totalPayment)} />
      </div>
    </div>
  );
}

/* ─── LOAN ELIGIBILITY ─── */
function LoanEligibilityCalculator() {
  const [income, setIncome] = useState(100000);
  const [obligations, setObligations] = useState(15000);
  const [rate, setRate] = useState(8.5);
  const [tenure, setTenure] = useState(20);

  const result = useMemo(() => {
    const maxEmi = (income - obligations) * 0.5;
    const r = rate / 100 / 12;
    const n = tenure * 12;
    const eligible = maxEmi * (Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n));
    return { maxEmi: Math.round(maxEmi), eligible: Math.round(Math.max(0, eligible)) };
  }, [income, obligations, rate, tenure]);

  return (
    <div>
      <Slider label="Monthly Income" value={income} onChange={setIncome} min={20000} max={1000000} step={5000} prefix="₹" />
      <Slider label="Existing EMI Obligations" value={obligations} onChange={setObligations} min={0} max={500000} step={1000} prefix="₹" />
      <Slider label="Interest Rate" value={rate} onChange={setRate} min={5} max={15} step={0.1} suffix="% p.a." />
      <Slider label="Tenure" value={tenure} onChange={setTenure} min={1} max={30} suffix=" years" />
      <div className="grid grid-cols-2 gap-3 mt-4">
        <ResultCard label="Max Affordable EMI" value={formatCurrency(result.maxEmi)} />
        <ResultCard label="Estimated Loan Eligibility" value={formatCurrency(result.eligible)} />
      </div>
    </div>
  );
}

/* ─── SWP CALCULATOR ─── */
function SWPCalculator() {
  const [corpus, setCorpus] = useState(5000000);
  const [withdrawal, setWithdrawal] = useState(25000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(20);

  const data = useMemo(() => {
    let balance = corpus;
    const r = rate / 100 / 12;
    const result: { year: number; balance: number; withdrawn: number }[] = [];
    let totalWithdrawn = 0;
    for (let y = 0; y < years && balance > 0; y++) {
      for (let m = 0; m < 12 && balance > 0; m++) {
        balance = balance * (1 + r) - withdrawal;
        totalWithdrawn += withdrawal;
      }
      result.push({ year: y + 1, balance: Math.max(0, Math.round(balance)), withdrawn: Math.round(totalWithdrawn) });
    }
    return result;
  }, [corpus, withdrawal, rate, years]);

  const final = data[data.length - 1];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Slider label="Initial Corpus" value={corpus} onChange={setCorpus} min={500000} max={100000000} step={100000} prefix="₹" />
        <Slider label="Monthly Withdrawal" value={withdrawal} onChange={setWithdrawal} min={5000} max={500000} step={1000} prefix="₹" />
        <Slider label="Expected Return" value={rate} onChange={setRate} min={1} max={12} step={0.5} suffix="% p.a." />
        <Slider label="Withdrawal Period" value={years} onChange={setYears} min={1} max={40} suffix=" years" />
        <div className="grid grid-cols-2 gap-3 mt-4">
          <ResultCard label="Total Withdrawn" value={formatCurrency(final.withdrawn)} />
          <ResultCard label="Remaining Corpus" value={formatCurrency(final.balance)} />
        </div>
      </div>
      <div className="bg-white border border-border rounded-xl p-4">
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E8EDF8" />
            <XAxis dataKey="year" tick={{ fontSize: 11 }} />
            <YAxis tickFormatter={(v) => formatCurrency(v)} tick={{ fontSize: 11 }} />
            <Tooltip formatter={(v: number) => formatCurrency(v)} />
            <Area type="monotone" dataKey="balance" name="Remaining Corpus" fill="#F8F2DC" stroke="#C8A94E" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/* ─── TABS CONFIG ─── */
const tabs = [
  { id: "sip", label: "SIP", icon: BarChart3, component: SIPCalculator, category: "Investment" },
  { id: "lumpsum", label: "Lumpsum", icon: TrendingUp, component: LumpsumCalculator, category: "Investment" },
  { id: "stepup", label: "Step-Up SIP", icon: ArrowUpRight, component: StepUpSIPCalculator, category: "Investment" },
  { id: "goal", label: "Goal Planner", icon: Target, component: GoalCalculator, category: "Investment" },
  { id: "retirement", label: "Retirement", icon: Landmark, component: RetirementCalculator, category: "Investment" },
  { id: "swp", label: "SWP", icon: Calculator, component: SWPCalculator, category: "Investment" },
  { id: "insurance", label: "Life Cover", icon: Shield, component: InsuranceCoverageCalculator, category: "Protection" },
  { id: "education", label: "Child Education", icon: GraduationCap, component: ChildEducationCalculator, category: "Protection" },
  { id: "homeloan", label: "Home Loan EMI", icon: Home, component: HomeLoanEMICalculator, category: "Loan" },
  { id: "loaneligibility", label: "Loan Eligibility", icon: Calculator, component: LoanEligibilityCalculator, category: "Loan" },
];

/* ─── MAIN PAGE ─── */
const ToolsPage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState("sip");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && tabs.find((t) => t.id === tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const active = tabs.find((t) => t.id === activeTab)!;
  const ActiveComponent = active.component;

  return (
    <div>
      <section className="bg-gradient-hero py-16">
        <div className="container text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex bg-gold-500/20 border border-gold-500/40 text-gold-400 font-display font-bold text-[11px] tracking-[0.1em] px-4 py-1.5 rounded-pill mb-4"
          >
            FINANCIAL PLANNING TOOLS
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-black text-4xl md:text-5xl text-white mb-3"
          >
            Plan Smart. Invest Smarter.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-serif italic text-lg text-gold-300/80 max-w-xl mx-auto"
          >
            Use our free calculators to plan your financial future with confidence.
          </motion.p>
        </div>
      </section>

      <section className="py-10 bg-gold-50">
        <div className="container">
          <div className="mb-8">
            {["Investment", "Protection", "Loan"].map((cat) => (
              <div key={cat} className="mb-3">
                <span className="font-display font-bold text-xs text-muted-foreground tracking-wider uppercase mr-3">{cat}</span>
                <div className="inline-flex flex-wrap gap-1.5">
                  {tabs.filter((t) => t.category === cat).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-pill text-xs font-display font-bold transition-all ${
                        activeTab === tab.id
                          ? "bg-navy-800 text-gold-400 shadow-navy"
                          : "bg-white text-navy-700 border border-border hover:border-gold-400"
                      }`}
                    >
                      <tab.icon size={14} />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-navy"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center">
                <active.icon size={20} className="text-gold-600" />
              </div>
              <h2 className="font-display font-black text-xl text-navy-800">{active.label} Calculator</h2>
            </div>
            <ActiveComponent />
          </motion.div>

          <div className="mt-6 border-l-4 border-negative/60 bg-negative/5 rounded-r-lg p-4">
            <p className="font-sans text-xs text-navy-700 leading-relaxed">
              Calculator results are for illustration purposes only and should not be considered investment advice or guaranteed returns.
              All return figures shown are assumed rates for illustration only. Past performance is not indicative of future returns.
              Actual investment performance may vary depending on market conditions.
              Mutual fund investments are subject to market risks. Read all scheme-related documents carefully before investing.
              ARN-345665 | NOT a SEBI-Registered Investment Adviser.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;
