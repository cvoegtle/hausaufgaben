package org.voegtle.homework

import org.voegtle.homework.data.Hausaufgabe

@Throws(InvalidHomeworkException::class)
fun validate(aufgabe: Hausaufgabe) {
  when {
    aufgabe.fach == null -> throw InvalidHomeworkException("Fach fehlt")
    aufgabe.datum == null -> throw InvalidHomeworkException("Datum fehlt")
    aufgabe.aufgabe == null || aufgabe.aufgabe == "" -> throw InvalidHomeworkException("Aufgabe fehlt")
  }
}

class InvalidHomeworkException(message: String) : Exception(message)