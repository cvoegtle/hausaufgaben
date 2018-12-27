package org.voegtle.homework.processing

import java.util.Date

fun daysBefore(days: Long) = Date().time - days * 24 * 60 * 60 * 1000
fun sevenDaysBefore() = daysBefore(7)
