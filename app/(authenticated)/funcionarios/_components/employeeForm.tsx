"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InputMask from "react-input-mask";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export default function EmployeeForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [enums, setEnums] = useState({
    employer: [],
    department: [],
    function: [],
    status: [],
  });

  const [formData, setFormData] = useState({
    name: "",
    adress: "",
    city: "",
    email: "",
    phone: "",
    birthDate: "",
    admission: "",
    cpf: "",
    rg: "",
    employer: "",
    department: "",
    function: "",
    status: "Ativo",
  });

  useEffect(() => {
    async function fetchEnums() {
      const res = await fetch("/api/enums");
      const data = await res.json();
      setEnums(data);
    }
    fetchEnums();
  }, []);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function cleanField(value: string) {
    return value.replace(/\D/g, "");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true); // Disable the button to prevent multiple submissions
    function resetForm() {
      setFormData({
        name: "",
        adress: "",
        city: "",
        email: "",
        phone: "",
        birthDate: "",
        admission: "",
        cpf: "",
        rg: "",
        employer: "",
        department: "",
        function: "",
        status: "Ativo",
      });
    }

    const cleanedData = {
      ...formData,
      phone: cleanField(formData.phone),
      cpf: cleanField(formData.cpf),
      rg: cleanField(formData.rg),
    };

    try {
      const res = await fetch("/api/funcionarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cleanedData),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.message || "Erro ao cadastrar");
        toast.error("Erro ao cadastrar funcionário");
        return;
      }
      console.log("toast chegou aqui");
      toast.success("Funcionário cadastrado com sucesso!");
      resetForm();
    } catch (err) {
      console.error("Erro no envio do formulário:", err);
      alert("Erro inesperado. Tente novamente.");
      toast.error("Erro inesperado. Tente novamente.");
    } finally {
      setIsSubmitting(false); // Re-enable the button after submission
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md h-[75vh] w-full grid grid-cols-2 gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
        className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
      />
      <input
        type="text"
        name="adress"
        placeholder="Endereço"
        value={formData.adress}
        onChange={handleChange}
        required
        className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
      />
      <input
        type="text"
        name="city"
        placeholder="Cidade"
        value={formData.city}
        onChange={handleChange}
        required
        className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
      />
      <InputMask
        mask="(99) 99999-9999"
        value={formData.phone}
        onChange={handleChange}
      >
        {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
          <input
            {...inputProps}
            type="text"
            name="phone"
            placeholder="Celular"
            required
            className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
          />
        )}
      </InputMask>
      <input
        type="date"
        name="birthDate"
        placeholder="Nascimento"
        value={formData.birthDate}
        onChange={handleChange}
        required
        className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
      />
      <input
        type="date"
        name="admission"
        placeholder="Admissão"
        value={formData.admission}
        onChange={handleChange}
        required
        className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
      />
      <InputMask
        mask="999.999.999-99"
        value={formData.cpf}
        onChange={handleChange}
      >
        {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
          <input
            {...inputProps}
            type="text"
            name="cpf"
            placeholder="CPF"
            required
            className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
          />
        )}
      </InputMask>
      <InputMask
        mask="999.999.99-99"
        value={formData.rg}
        onChange={handleChange}
      >
        {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
          <input
            {...inputProps}
            type="text"
            name="rg"
            placeholder="RG"
            required
            className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
          />
        )}
      </InputMask>

      <select
        name="employer"
        onChange={handleChange}
        value={formData.employer}
        required
        className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
      >
        <option value="">Selecione o empregador</option>
        {enums.employer.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        name="department"
        onChange={handleChange}
        value={formData.department}
        required
        className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
      >
        <option value="">Selecione o setor</option>
        {enums.department.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <select
        name="function"
        onChange={handleChange}
        value={formData.function}
        required
        className="px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#78b49a]"
      >
        <option value="">Selecione a função</option>
        {enums.function.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="col-span-2">
        <label className="mr-4">Status:</label>
        {enums.status.map((item) => (
          <label key={item} className="mr-4">
            <input
              type="radio"
              name="status"
              value={item}
              checked={formData.status === item}
              onChange={handleChange}
              className="mr-2"
            />{" "}
            {item}
          </label>
        ))}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#78b49a] text-white px-4 py-2 rounded hover:bg-[#78b49a]/80 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 col-span-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Cadastrando...
          </>
        ) : (
          "Cadastrar"
        )}
      </button>
    </motion.form>
  );
}
