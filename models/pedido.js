const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  docente: {
    nombre: String,
    apellido: String,
    dni: Number,
    matricula: Number,
  },
  descripcion: {
    required: true,
    type: String,
  },
  fecha_solicitud: {
    required: true,
    type: Date,
  },
  fecha_utilizacion: {
    required: true,
    type: Date,
  },
  numero_laboratorio: {
    required: true,
    type: Number,
  },
  tipo_pedido: {
    required: true,
    type: String,
  },
  cantidad_grupos: {
    required: true,
    type: Number,
  },
  observaciones: {
    type: String,
  },
  materia: {
    required: true,
    type: String,
  },
  numero_tp: {
    required: true,
    type: Number,
  },
  lista_equipos: [
    {
      cantidad: {
        required: true,
        type: Number,
      },
      equipo: { type: mongoose.Schema.Types.ObjectId, ref: "Equipo" },
    }
  ],
  lista_reactivos: [
    {
      cantidad: {
        required: true,
        type: Number,
      },
      un_medida: {
        required: true,
        type: String,
      },
      calidad: {
        required: true,
        type: String,
      },
      concentracion_tipo: {
        required: true,
        type: String,
      },
      concentracion_medida: {
        required: true,
        type: String,
      },
      disolvente: {
        required: true,
        type: String,
      },
      otro_disolvente_descripcion: {
        type: String,
      },
      reactivo: { type: mongoose.Schema.Types.ObjectId, ref: "Reactivo" },
    }
  ],
  lista_materiales: [
    {
      cantidad: {
        required: true,
        type: Number,
      },
      material: { type: mongoose.Schema.Types.ObjectId, ref: "Material" },
    }
  ]
});

module.exports = mongoose.model("Pedido", dataSchema);
