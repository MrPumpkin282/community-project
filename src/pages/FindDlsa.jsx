import React, { useState } from 'react';
import { MapPin, ExternalLink, Phone, Building, Search, AlertCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SLSA_DIRECTORY } from '../data/slsaDirectory';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TricolorCardTop } from '../components/TricolorElements';

export default function FindDlsa() {
  const [selectedStateCode, setSelectedStateCode] = useState('DL'); // Default Delhi
  const [searchFilter, setSearchFilter] = useState('');

  const selectedSLSA = SLSA_DIRECTORY.find((s) => s.code === selectedStateCode) || SLSA_DIRECTORY[0];

  const filteredSLSAs = SLSA_DIRECTORY.filter((s) =>
    s.name.toLowerCase().includes(searchFilter.trim().toLowerCase())
  );

  return (
    <div>
      {/* Hero */}
      <div className="bg-gradient-to-br from-navy-700 to-navy-900 text-white">
        <div className="section-container pb-8 sm:pb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-saffron-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold">Find My Nearest DLSA</h1>
          </div>
          <p className="text-lg text-navy-200 max-w-3xl">
            Locate your State Legal Services Authority (SLSA) and District Legal Services Authority (DLSA)
            across all 28 Indian States and 8 Union Territories.
          </p>
        </div>
      </div>

      <div className="section-container">
        {/* Core Instructions Box */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 mb-10 flex items-start gap-3.5">
          <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-sm text-amber-900 leading-relaxed">
            <p className="font-bold mb-1">Where is the DLSA physically located in my district?</p>
            <p>
              District Legal Services Authorities (DLSAs) are <strong>located inside your District Court complex</strong> in every district across India. You can walk in during court working hours (Monday to Friday, 10:00 AM – 5:00 PM) without an appointment.
            </p>
          </div>
        </div>

        {/* State Selector Tool */}
        <div className="card-accent border-navy-200 mb-12 p-6 sm:p-8 relative overflow-hidden">
          <TricolorCardTop height="h-[3px]" />
          <h2 className="text-xl font-bold text-navy-900 mb-4">Select Your State or Union Territory</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Choose State / UT
              </label>
              <Select value={selectedStateCode} onValueChange={setSelectedStateCode}>
                <SelectTrigger className="w-full text-sm border-gray-300 bg-white font-medium text-navy-900 h-11 rounded-xl">
                  <SelectValue placeholder="Select a State or Union Territory" />
                </SelectTrigger>
                <SelectContent className="max-h-80">
                  <SelectGroup>
                    <SelectLabel className="text-xs font-bold text-navy-800">28 States</SelectLabel>
                    {SLSA_DIRECTORY.filter((s) => s.type === 'State').map((st) => (
                      <SelectItem key={st.code} value={st.code}>
                        {st.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel className="text-xs font-bold text-navy-800">8 Union Territories</SelectLabel>
                    {SLSA_DIRECTORY.filter((s) => s.type === 'Union Territory').map((ut) => (
                      <SelectItem key={ut.code} value={ut.code}>
                        {ut.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                Quick Filter
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3.5 pointer-events-none" />
                <Input
                  type="text"
                  placeholder="Type state name..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="pl-9 pr-3 h-11 rounded-xl text-sm border-gray-300"
                />
              </div>
            </div>
          </div>

          {/* Selected State Details Card */}
          {selectedSLSA && (
            <Card className="border-navy-200 shadow-sm bg-white overflow-hidden relative">
              <TricolorCardTop height="h-[3px]" />
              <CardHeader className="p-6 pb-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CardTitle className="text-xl font-bold text-navy-800">{selectedSLSA.name}</CardTitle>
                    <Badge variant="secondary" className="bg-navy-50 text-navy-700 border-navy-200">
                      {selectedSLSA.type}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500">Capital / Principal Seat: {selectedSLSA.capital}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Button asChild size="sm" className="bg-navy-600 hover:bg-navy-700 text-white text-xs gap-1.5">
                    <a
                      href={selectedSLSA.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Official SLSA Portal
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="p-6 pt-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-700">
                  <div className="p-3.5 bg-navy-50/50 rounded-lg border border-navy-100">
                    <p className="font-semibold text-navy-900 mb-1">Court Complex Locations:</p>
                    <p>{selectedSLSA.districtCourtNotice}</p>
                  </div>
                  <div className="p-3.5 bg-saffron-50/50 rounded-lg border border-saffron-200">
                    <p className="font-semibold text-saffron-900 mb-1">Helpline Access:</p>
                    <p>
                      Call toll-free <strong>15100</strong> from any mobile or landline across {selectedSLSA.name} to connect with legal aid officers.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-500 gap-2">
                  <span>Physical access: Available Monday to Friday, 10:00 AM – 5:00 PM</span>
                  <a
                    href="https://nalsa.gov.in/directory/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-external inline-flex items-center gap-1 font-semibold"
                  >
                    View All District Phone Numbers on NALSA Directory
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Directory Grid for filtered results */}
        {searchFilter.trim() && (
          <div className="mb-12">
            <h3 className="text-lg font-bold text-navy-800 mb-4">
              Search Results ({filteredSLSAs.length})
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredSLSAs.map((st) => (
                <Card
                  key={st.code}
                  onClick={() => {
                    setSelectedStateCode(st.code);
                    window.scrollTo({ top: 300, behavior: 'smooth' });
                  }}
                  className={`p-4 border text-left transition-all cursor-pointer ${
                    selectedStateCode === st.code
                      ? 'border-navy-600 bg-navy-50 shadow'
                      : 'border-gray-200 hover:border-navy-300 hover:shadow-sm bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-navy-900 text-sm">{st.name}</h4>
                    <Badge variant="outline" className="text-[10px]">{st.type}</Badge>
                  </div>
                  <p className="text-xs text-gray-500 mb-2">Seat: {st.capital}</p>
                  <p className="text-[11px] text-navy-600 font-semibold flex items-center gap-1">
                    Select to view details <ArrowRight className="w-3 h-3" />
                  </p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Helpful Tips Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="card">
            <div className="w-9 h-9 rounded-lg bg-navy-100 text-navy-700 flex items-center justify-center mb-3">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-navy-800 text-sm mb-1.5">No Lawyer Needed to Apply</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              You do not need to hire a private lawyer to approach the DLSA. The DLSA front office staff and Para-Legal Volunteers (PLVs) will help you fill out the application form for free.
            </p>
          </div>

          <div className="card">
            <div className="w-9 h-9 rounded-lg bg-saffron-100 text-saffron-700 flex items-center justify-center mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-navy-800 text-sm mb-1.5">National Legal Helpline 15100</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              If you cannot physically travel to the court complex, call <strong>15100</strong> toll-free. Legal aid counsel are available 24×7 to register your grievance and connect you to your DLSA.
            </p>
          </div>

          <div className="card">
            <div className="w-9 h-9 rounded-lg bg-forest-100 text-forest-700 flex items-center justify-center mb-3">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-navy-800 text-sm mb-1.5">Completely Free of Charge</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Under Article 39A, all legal services provided through the DLSA — including advocate fees, drafting charges, and court fee waivers — are 100% free for eligible citizens.
            </p>
          </div>
        </div>

        {/* How to Apply Bridge */}
        <div className="bg-navy-800 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Need to know what documents to carry?</h3>
            <p className="text-xs sm:text-sm text-navy-200">
              Read our step-by-step application walkthrough to prepare your documents before visiting the court.
            </p>
          </div>
          <Button asChild className="bg-saffron-500 hover:bg-saffron-600 text-white font-semibold shrink-0 gap-2">
            <Link to="/how-to-apply">
              How to Apply Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
