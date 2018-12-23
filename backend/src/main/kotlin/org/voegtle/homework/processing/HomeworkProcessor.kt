package org.voegtle.homework.processing

import org.voegtle.homework.data.Hausaufgabe
import java.util.Date

fun setCurrentDate(aufgabe: Hausaufgabe) {
  aufgabe.datum = Date()
}